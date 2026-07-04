import pytest
from pathlib import Path
from extract import extract_pdf

SOURCE_DIR = Path(__file__).parent.parent / "国际经济学课上知识"

def test_extract_pdf_returns_nonempty_string():
    pdf_path = SOURCE_DIR / "Krugman(1979) Increasing returns, monopolistic competition, and international trade.pdf"
    result = extract_pdf(pdf_path)
    assert isinstance(result, str)
    assert len(result) > 100
    assert "trade" in result.lower() or "krugman" in result.lower()

from extract import extract_pptx

def test_extract_pptx_returns_nonempty_string():
    pptx_path = SOURCE_DIR / "partII lecture 2 IIT.pptx"
    result = extract_pptx(pptx_path)
    assert isinstance(result, str)
    assert len(result) > 50
