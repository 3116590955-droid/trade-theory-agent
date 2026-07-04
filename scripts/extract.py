import sys
sys.stdout.reconfigure(encoding='utf-8')

from pathlib import Path

SOURCE_DIR = Path(__file__).parent.parent / "国际经济学课上知识"
OUTPUT_DIR = Path(__file__).parent.parent / "knowledge_base"

def main():
    OUTPUT_DIR.mkdir(exist_ok=True)
    print(f"Source: {SOURCE_DIR}")
    print(f"Output: {OUTPUT_DIR}")
    print("Files found:")
    for f in sorted(SOURCE_DIR.iterdir()):
        print(f"  {f.name}")

if __name__ == "__main__":
    main()
