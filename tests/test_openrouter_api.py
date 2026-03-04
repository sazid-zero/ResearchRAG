#!/usr/bin/env python3
"""
Simple test script to verify OpenRouter API key is working correctly
Run with: python scripts/test_openrouter_api.py
"""

import sys
import os
from pathlib import Path

# Add parent directory to path to import config
sys.path.insert(0, str(Path(__file__).parent.parent))

from src.config import Config
import requests
import json

def test_openrouter_api():
    """Test if OpenRouter API key is valid and working"""
    
    print("\n" + "="*60)
    print("OpenRouter API Test Script")
    print("="*60)
    
    # Check if API key is set
    api_key = Config.OPENROUTER_API_KEY
    print(f"\n1. Checking API Key...")
    
    if not api_key or api_key == "sk-or-v1-your_actual_api_key_here":
        print("   ❌ FAIL: API key not set or using placeholder")
        print("   Please set OPENROUTER_API_KEY in your .env file")
        return False
    
    if not api_key.startswith("sk-or-v1-"):
        print("   ❌ FAIL: API key format incorrect (should start with 'sk-or-v1-')")
        return False
    
    print("   ✓ API key format looks correct")
    
    # Test API connection
    print(f"\n2. Testing API Connection...")
    print(f"   URL: {Config.OPENROUTER_API_URL}")
    print(f"   Model: {Config.OPENROUTER_MODEL}")
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "HTTP-Referer": "http://localhost:8000",
        "X-Title": "Research Paper RAG Test",
        "Content-Type": "application/json"
    }
    
    # Make a simple test request
    payload = {
        "model": Config.OPENROUTER_MODEL,
        "messages": [
            {
                "role": "user",
                "content": "Say 'API test successful' in one sentence."
            }
        ],
        "temperature": 0.7,
        "max_tokens": 50
    }
    
    try:
        print("   Sending test request...")
        response = requests.post(
            f"{Config.OPENROUTER_API_URL}/chat/completions",
            headers=headers,
            json=payload,
            timeout=30
        )
        
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 200:
            result = response.json()
            message = result.get("choices", [{}])[0].get("message", {}).get("content", "")
            print(f"   ✓ API Response: {message}")
            print("\n" + "="*60)
            print("✅ SUCCESS: OpenRouter API is working correctly!")
            print("="*60 + "\n")
            return True
        
        elif response.status_code == 401:
            print(f"   ❌ FAIL: Unauthorized (401)")
            print("   Your API key is invalid or expired")
            print(f"   Response: {response.text}")
            return False
        
        elif response.status_code == 429:
            print(f"   ⚠️  Rate Limited (429)")
            print("   Too many requests. Wait and try again later")
            return False
        
        else:
            print(f"   ❌ FAIL: HTTP {response.status_code}")
            print(f"   Response: {response.text}")
            return False
    
    except requests.exceptions.Timeout:
        print("   ❌ FAIL: Request timeout (30s)")
        print("   Check your internet connection or OpenRouter API status")
        return False
    
    except requests.exceptions.ConnectionError:
        print("   ❌ FAIL: Connection error")
        print("   Cannot connect to OpenRouter API")
        return False
    
    except Exception as e:
        print(f"   ❌ FAIL: Unexpected error: {str(e)}")
        return False

if __name__ == "__main__":
    success = test_openrouter_api()
    sys.exit(0 if success else 1)
