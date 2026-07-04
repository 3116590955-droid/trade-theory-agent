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

## 当前限制

- 知识检索仅基于本地课程材料（Krugman、Melitz、EK 等），arXiv 实时检索功能计划在后续版本实现
- 超出知识边界的问题将基于模型自身知识回答，不进行外部检索
