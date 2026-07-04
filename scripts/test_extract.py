import pytest
import tempfile
from pathlib import Path
from extract import extract_pdf
from extract import extract_pptx
from extract import write_markdown

SOURCE_DIR = Path(__file__).parent.parent / "国际经济学课上知识"

def test_extract_pdf_returns_nonempty_string():
    pdf_path = SOURCE_DIR / "Krugman(1979) Increasing returns, monopolistic competition, and international trade.pdf"
    result = extract_pdf(pdf_path)
    assert isinstance(result, str)
    assert len(result) > 100
    assert "trade" in result.lower() or "krugman" in result.lower()

def test_extract_pptx_returns_nonempty_string():
    pptx_path = SOURCE_DIR / "partII lecture 2 IIT.pptx"
    result = extract_pptx(pptx_path)
    assert isinstance(result, str)
    assert len(result) > 50
    assert "[Slide 1]" in result


def test_write_markdown_creates_file_with_header():
    with tempfile.TemporaryDirectory() as tmp:
        out_dir = Path(tmp)
        src = SOURCE_DIR / "Krugman(1979) Increasing returns, monopolistic competition, and international trade.pdf"
        write_markdown(src, out_dir)
        out_file = out_dir / (src.stem + ".md")
        assert out_file.exists()
        content = out_file.read_text(encoding="utf-8")
        assert content.startswith("---")
        assert "source:" in content
        assert "type: pdf" in content
        assert len(content) > 200
