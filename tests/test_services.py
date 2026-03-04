"""
Unit tests for all services
"""
import pytest
import asyncio
from pathlib import Path
from src.services.pdf_processor import PDFProcessor
from src.services.embedding_service import EmbeddingService
from src.config import logger


class TestPDFProcessor:
    """Test PDF processing"""
    
    def setup_method(self):
        """Setup test fixtures"""
        self.processor = PDFProcessor()
        logger.info("[v0] [TEST] PDFProcessor setup")
    
    def test_initialization(self):
        """Test processor initialization"""
        logger.debug("[v0] [TEST] test_initialization")
        assert self.processor is not None
        assert self.processor.chunk_size > 0
    
    def test_chunk_text(self):
        """Test text chunking"""
        logger.debug("[v0] [TEST] test_chunk_text")
        
        test_text = " ".join(["word"] * 1000)  # 1000 word document
        chunks = self.processor.chunk_text(test_text, "test_section")
        
        assert len(chunks) > 0
        assert all(hasattr(c, 'text') for c in chunks)
        logger.info(f"[v0] [TEST] Created {len(chunks)} chunks")


class TestEmbeddingService:
    """Test embedding service"""
    
    def setup_method(self):
        """Setup test fixtures"""
        self.embedding_service = EmbeddingService()
        logger.info("[v0] [TEST] EmbeddingService setup")
    
    def test_initialization(self):
        """Test initialization"""
        logger.debug("[v0] [TEST] test_initialization")
        assert self.embedding_service.model is not None
    
    def test_embed_single_text(self):
        """Test single text embedding"""
        logger.debug("[v0] [TEST] test_embed_single_text")
        
        test_text = "This is a test sentence for embedding"
        embedding = self.embedding_service.embed_text(test_text)
        
        assert embedding is not None
        assert len(embedding) > 0
        logger.info(f"[v0] [TEST] Embedding dimension: {len(embedding)}")
    
    def test_embed_multiple_texts(self):
        """Test multiple text embeddings"""
        logger.debug("[v0] [TEST] test_embed_multiple_texts")
        
        test_texts = [
            "First test sentence",
            "Second test sentence",
            "Third test sentence"
        ]
        embeddings = self.embedding_service.embed_texts(test_texts)
        
        assert len(embeddings) == len(test_texts)
        logger.info(f"[v0] [TEST] Created {len(embeddings)} embeddings")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "-s"])
