# 新贸易理论智能体

## 快速启动

### 1. 处理知识库（仅首次需要）
pip install -r scripts/requirements.txt
python scripts/extract.py

### 2. 启动网页应用
cd webapp
cp .env.example .env.local
# 编辑 .env.local，填入 ANTHROPIC_API_KEY
npm install
npm run dev

访问 http://localhost:3000
