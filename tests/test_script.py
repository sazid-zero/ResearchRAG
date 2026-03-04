"""
Improved test script with progress indicators and better error handling
Tests all functionality with DeepSeek API
"""
import requests
import json
import time
import sys
import os
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configuration
API_URL = "http://localhost:8000"
SAMPLE_PAPERS_DIR = Path("sample_papers")
DEEPSEEK_API_KEY = os.getenv("DEEPSEEK_API_KEY")

# Colors for terminal output
class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

def print_header(text):
    """Print a header"""
    print(f"\n{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.ENDC}")
    print(f"{Colors.BOLD}{Colors.BLUE}{text}{Colors.ENDC}")
    print(f"{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.ENDC}\n")

def print_success(text):
    """Print success message"""
    print(f"{Colors.GREEN}OK {text}{Colors.ENDC}")

def print_error(text):
    """Print error message"""
    print(f"{Colors.RED}ERROR {text}{Colors.ENDC}")

def print_info(text):
    """Print info message"""
    print(f"{Colors.CYAN}INFO {text}{Colors.ENDC}")

def print_warning(text):
    """Print warning message"""
    print(f"{Colors.YELLOW}WARNING {text}{Colors.ENDC}")

def check_deepseek():
    """Check if LLM configuration is correct"""
    print_info("Checking LLM configuration...")
    
    llm_provider = os.getenv("LLM_PROVIDER", "openrouter").lower()
    api_key = None
    api_key_name = ""
    
    if llm_provider == "deepseek":
        api_key = os.getenv("DEEPSEEK_API_KEY")
        api_key_name = "DEEPSEEK_API_KEY"
    elif llm_provider == "openai":
        api_key = os.getenv("OPENAI_API_KEY")
        api_key_name = "OPENAI_API_KEY"
    elif llm_provider == "openrouter":
        api_key = os.getenv("OPENROUTER_API_KEY")
        api_key_name = "OPENROUTER_API_KEY"
    else:
        print_info(f"Using local LLM provider: {llm_provider}")
        return True
    
    if not api_key:
        print_error(f"{api_key_name} not found in .env file")
        if llm_provider == "deepseek":
            print_info("Get your API key from: https://platform.deepseek.com")
        elif llm_provider == "openai":
            print_info("Get your API key from: https://platform.openai.com")
        elif llm_provider == "openrouter":
            print_info("Get your API key from: https://openrouter.ai")
        print_info(f"Add this to your .env file: {api_key_name}=your_key_here")
        return False
    
    # Accept various API key formats
    valid_prefixes = ["sk_", "sk-", "Bearer "]
    is_valid = any(api_key.startswith(prefix) for prefix in valid_prefixes) or len(api_key) > 20
    
    if is_valid:
        print_success(f"{api_key_name} is configured")
        print_info(f"LLM Provider: {llm_provider}")
        return True
    else:
        print_error(f"{api_key_name} format looks invalid")
        return False

def check_server():
    """Check if server is running"""
    print_info("Checking server health...")
    try:
        response = requests.get(f"{API_URL}/api/health", timeout=5)
        if response.status_code == 200:
            print_success("Server is running")
            data = response.json()
            print_info(f"App: {data['app_name']} v{data['version']}")
            return True
    except requests.exceptions.ConnectionError:
        print_error(f"Cannot connect to server at {API_URL}")
        print_info("Start the server: python -m uvicorn src.main:app --reload")
        return False
    except Exception as e:
        print_error(f"Health check failed: {str(e)}")
        return False

def upload_papers():
    """Upload all papers from sample_papers folder"""
    print_header("STEP 1: UPLOADING PAPERS")
    
    if not SAMPLE_PAPERS_DIR.exists():
        print_error(f"Sample papers folder not found: {SAMPLE_PAPERS_DIR}")
        return []
    
    pdf_files = list(SAMPLE_PAPERS_DIR.glob("*.pdf"))
    if not pdf_files:
        print_warning(f"No PDF files found in {SAMPLE_PAPERS_DIR}")
        return []
    
    print_info(f"Found {len(pdf_files)} PDF files to upload")
    paper_ids = []
    
    for i, pdf_file in enumerate(pdf_files, 1):
        print_info(f"[{i}/{len(pdf_files)}] Uploading {pdf_file.name}...")
        
        try:
            with open(pdf_file, "rb") as f:
                files = {"file": (pdf_file.name, f, "application/pdf")}
                response = requests.post(f"{API_URL}/api/papers/upload", files=files, timeout=60)
            
            if response.status_code == 200:
                data = response.json()
                paper_ids.append(data["paper_id"])
                print_success(f"Uploaded {pdf_file.name} (ID: {data['paper_id'][:8]}...)")
                print_info(f"  Chunks created: {data['chunks_created']}")
                print_info(f"  File size: {data['metadata']['file_size']} bytes")
            else:
                print_error(f"Failed to upload {pdf_file.name}: {response.status_code}")
                print_info(f"Response: {response.text}")
        
        except Exception as e:
            print_error(f"Upload failed for {pdf_file.name}: {str(e)}")
    
    return paper_ids

def list_papers():
    """List all uploaded papers"""
    print_header("STEP 2: LISTING PAPERS")
    
    try:
        response = requests.get(f"{API_URL}/api/papers", timeout=10)
        if response.status_code == 200:
            data = response.json()
            print_success(f"Total papers: {data['total_papers']}")
            
            for paper in data['papers']:
                print_info(f"Paper: {paper['metadata']['title']}")
                print_info(f"  ID: {paper['paper_id'][:8]}...")
                print_info(f"  Authors: {', '.join(paper['metadata']['authors']) if paper['metadata']['authors'] else 'Unknown'}")
                print_info(f"  Year: {paper['metadata']['year']}")
                print_info(f"  Chunks: {paper['metadata']['chunks']}\n")
        else:
            print_error(f"Failed to list papers: {response.status_code}")
    
    except Exception as e:
        print_error(f"Error listing papers: {str(e)}")

def run_queries():
    """Run test queries"""
    print_header("STEP 3: RUNNING QUERIES (DeepSeek: 2-5 seconds each)")
    
    test_queries = [
        "What is machine learning?",
        "Explain the main findings of these papers",
        "What methodologies were used?",
        "What are the key conclusions?",
        "Describe the abstract of the papers"
    ]
    
    print_info(f"Running {len(test_queries)} queries with DeepSeek API\n")
    
    for i, query in enumerate(test_queries, 1):
        print(f"\n{Colors.BOLD}{Colors.CYAN}Query {i}/{len(test_queries)}: {query}{Colors.ENDC}")
        print("-" * 60)
        
        start_time = time.time()
        
        try:
            print_info("Sending query to RAG pipeline...")
            response = requests.post(
                f"{API_URL}/api/query",
                json={"question": query, "top_k": 5},
                timeout=30
            )
            
            elapsed = time.time() - start_time
            
            if response.status_code == 200:
                data = response.json()
                print_success(f"Response received in {elapsed:.1f} seconds")
                
                print(f"\n{Colors.BOLD}Answer:{Colors.ENDC}")
                print(f"{data['answer']}\n")
                
                if data['citations']:
                    print(f"{Colors.BOLD}Sources ({len(data['citations'])} citations):{Colors.ENDC}")
                    for j, citation in enumerate(data['citations'], 1):
                        print(f"  {j}. {citation['paper_title']}")
                        print(f"     Section: {citation['section']}, Page: {citation['page_number']}")
                        print(f"     Relevance: {citation['relevance_score']:.2f}")
                        print(f"     Snippet: {citation['text_snippet'][:100]}...\n")
                
                print_info(f"Confidence: {data['confidence']:.2f}")
                print_info(f"Model: {data['model_used']}")
            else:
                print_error(f"Query failed: {response.status_code}")
                print_info(f"Response: {response.text}")
        
        except requests.exceptions.Timeout:
            elapsed = time.time() - start_time
            print_error(f"Query timed out after {elapsed:.1f} seconds")
            print_warning("Check if DeepSeek API is responding. Verify your API key.")
        except Exception as e:
            print_error(f"Query error: {str(e)}")

def get_analytics():
    """Get system analytics"""
    print_header("STEP 4: SYSTEM ANALYTICS")
    
    try:
        response = requests.get(f"{API_URL}/api/analytics", timeout=10)
        if response.status_code == 200:
            data = response.json()
            print_success("Analytics retrieved")
            print_info(f"Total papers: {data['total_papers']}")
            print_info(f"Total chunks: {data['total_chunks']}")
            print_info(f"Embedding model: {data['embedding_model']}")
            print_info(f"LLM provider: {data['llm_provider']}")
            
            stats = data['vector_store_stats']
            print_info(f"Vector store:")
            print_info(f"  Points: {stats.get('points_count', 'N/A')}")
            print_info(f"  Collection: {stats.get('name', 'N/A')}")
        else:
            print_error(f"Failed to get analytics: {response.status_code}")
    
    except Exception as e:
        print_error(f"Analytics error: {str(e)}")

def main():
    """Main test flow"""
    print(f"\n{Colors.BOLD}{Colors.HEADER}")
    print("╔════════════════════════════════════════════════════════════╗")
    print("║     RAG System Test Suite - DeepSeek API Version           ║")
    print("╚════════════════════════════════════════════════════════════╝")
    print(f"{Colors.ENDC}")
    
    if not check_deepseek():
        return
    
    # Check server
    if not check_server():
        return
    
    # Upload papers
    paper_ids = upload_papers()
    if not paper_ids:
        print_warning("No papers uploaded. Skipping further tests.")
        return
    
    # List papers
    list_papers()
    
    # Run queries
    run_queries()
    
    # Get analytics
    get_analytics()
    
    # Summary
    print_header("TEST SUITE COMPLETE")
    print_success("All tests completed")
    print_info("API documentation: http://localhost:8000/docs")
    print_info("Logs: logs/rag_system.log")

if __name__ == "__main__":
    main()
