import sys
sys.stdout.reconfigure(encoding='utf-8')

from pathlib import Path
import fitz  # pymupdf

SOURCE_DIR = Path(__file__).parent.parent / "国际经济学课上知识"
OUTPUT_DIR = Path(__file__).parent.parent / "knowledge_base"


def extract_pdf(path: Path) -> str:
    doc = fitz.open(str(path))
    pages = []
    for page in doc:
        pages.append(page.get_text())
    doc.close()
    return "\n".join(pages)


def main():
    OUTPUT_DIR.mkdir(exist_ok=True)
    print(f"Source: {SOURCE_DIR}")
    print(f"Output: {OUTPUT_DIR}")
    print("Files found:")
    for f in sorted(SOURCE_DIR.iterdir()):
        print(f"  {f.name}")

if __name__ == "__main__":
    main()
