# Case Studies — 案例研究

[← Back to README.md](README.md)

---

> **Disclaimer / 免责声明:** These are self-portfolio case studies. No private client data is included. No customer deliveries are implied. No screenshots are inserted without reviewed assets. No demo availability is promised. These are technical capability illustrations for professional use. / 以下为个人作品集案例研究，不含任何私密客户数据，不暗示任何客户交付成果，未附未经审阅的图片，不承诺演示可用。仅用于展示技术能力。

---

## 1. Personal AI Ledger — 个人 AI 账本

### Business Problem — 业务问题

Managing daily personal expenses across multiple currencies was cumbersome. Manual entry was time-consuming and error-prone. The owner needed a lightweight, privacy-focused tool to track spending patterns without relying on third-party financial platforms. 日常多币种个人支出管理繁琐，手动记录耗时且易出错。需要一个轻量、隐私友好的工具来追踪消费模式，不依赖第三方金融平台。

### Implemented Functions — 已实现功能

- Cloudflare Workers D1 as serverless database 以 Cloudflare Workers D1 作为无服务器数据库
- Multi-currency expense logging with real-time exchange-rate sync 支持多币种支出记录与实时汇率同步
- Screenshot-assisted input for receipt-style data capture 截图辅助录入票据类数据
- Anonymized documentation prepared but not shown in this portfolio 已准备匿名化文档（案例中未展示）
- Original project is private — source code not publicly linked 原项目为私有仓库，未公开链接源码

### Technology — 技术栈

Cloudflare Workers, D1 (SQLite-based serverless DB), Hono/FastAPI patterns, client-side OCR helpers

### Reuse for Clients — 客户复用方向

Small business expense ledgers, multi-branch cost tracking, receipt digitization pipelines. 小微企业记账、多分支机构成本追踪、票据数字化流水线。

### Status — 状态

Active — ready for client-specific customization and data integration. 活跃 — 可针对客户需求进行定制与数据对接。

---

## 2. Belt Road Study & Employment Database — 一带一路学习与就业数据库

### Business Problem — 业务问题

Students and professionals researching Belt and Road Initiative countries faced fragmented information about universities, majors, tuition fees, and employment landscapes. No single structured resource combined all these dimensions. 研究"一带一路"沿线国家的学生与从业者难以找到关于高校、专业、学费、就业情况的统一结构化信息源。

### Implemented Functions — 已实现功能

- Next.js + TypeScript + Supabase full-stack application 基于 Next.js + TypeScript + Supabase 的全栈应用
- Country, university, and major directory with search and filtering 国家/高校/专业目录，支持搜索与筛选
- Tuition and cost-of-living fee calculator 学费与生活成本计算工具
- Content CMS for article and news management 内容 CMS 用于文章与资讯管理
- SEO-optimized routing and metadata 经 SEO 优化的路由与元数据
- **Note:** Private project — verify actual data sources before any production deployment. / **注：** 本项目为私有项目 — 生产部署前须验证数据来源。

### Technology — 技术栈

Next.js, TypeScript, Supabase (PostgreSQL, Auth, Storage), Next-SEO / custom SSG

### Reuse for Clients — 客户复用方向

Information portals for educational agencies, university management dashboards, student guidance platforms. 教育机构信息门户、高校管理平台、学生指导平台。

### Status — 状态

Active — production-ready architecture; data sourcing and licensing to be confirmed per client. 活跃 — 架构已可投入生产；数据来源与授权需按客户确认。

---

## 3. Family Health Management Web App — 家族健康管理 Web 应用

### Business Problem — 业务问题

Families needed a shared, permission-based platform to manage health records for multiple members — blood pressure, medication, and weekly/monthly health summaries — without relying on expensive, complex medical systems. 家庭需要一个共享且带权限管理的平台来统一管理多成员健康记录（血压、用药、周/月健康摘要），无需使用昂贵复杂的医疗系统。

### Implemented Functions — 已实现功能

- Next.js + Supabase + Drizzle ORM architecture 基于 Next.js + Supabase + Drizzle ORM 的架构
- Multi-member account management with role-based permissions 多成员账户管理与基于角色的权限控制
- Blood pressure record entry with chart visualization 血压数据录入与图表可视化
- Medication logging with dosage tracking 用药记录与剂量追踪
- Reminder records (manual — NO scheduled pushing) 提醒记录（手动操作 — 无定时推送功能）
- Rule-based weekly and monthly report generation 基于规则的周报与月报生成
- **Clear boundary:** Not a medical diagnosis tool; personal wellbeing data only. / **明确边界：** 非医疗诊断工具，仅供个人健康数据参考。
- Public source URL: [https://github.com/daviddingn-sys/family-companion-platform](https://github.com/daviddingn-sys/family-companion-platform)

### Technology — 技术栈

Next.js, Supabase, Drizzle ORM, Recharts / Chart.js for visualization

### Reuse for Clients — 客户复用方向

Family wellbeing dashboards, elder-care monitoring portals, corporate employee wellbeing programs. 家庭健康仪表盘、长者照护门户、企业员工健康计划。

### Status — Active — open-source component library available for fork and adaptation. 活跃 — 开源组件库可供 fork 与二次开发。

---

## 4. BP Web Monitor — 血压 Web 监控系统

### Business Problem — 业务问题

Users tracking blood pressure over time needed a simple desktop-friendly web tool for systematic data capture, trend analysis, and data portability — without the overhead of a full medical system. 血压长期监测用户需要一个简洁的桌面端 Web 工具，用于系统化数据录入、趋势分析和数据导出，避免复杂医疗系统带来的冗余。

### Implemented Functions — 已实现功能

- Next.js + TypeScript + PostgreSQL + Supabase stack 基于 Next.js + TypeScript + PostgreSQL + Supabase 技术栈
- Blood pressure data entry, import, and export (CSV/JSON) 血压数据录入、导入与导出（CSV/JSON）
- Interactive BP trend charts 交互式血压趋势图表
- Optional OCR configuration for scanning paper records 可选 OCR 功能用于扫描纸质记录
- **Clear boundary:** Data capture and reporting dashboard — NOT a medical diagnostic tool. / **明确边界：** 数据采集与报告仪表盘 — 非医疗诊断工具。
- Original project is private — source code not publicly linked. 原项目为私有仓库，未公开链接源码。

### Technology — 技术栈

Next.js, TypeScript, PostgreSQL, Supabase, client-side charting libraries

### Reuse for Clients — 客户复用方向

Patient data capture dashboards, chronic-disease monitoring portals, clinic report generators. 患者数据采集仪表盘、慢病监测门户、诊所报告生成器。

### Status — Active — fully functional prototype ready for client-specific branding and data integration. 活跃 — 功能原型就绪，可针对客户需求进行品牌定制与数据对接。

---

## Summary — 总结

| # | Case Study (EN) | 案例研究 (ZH) | Technology | Client Reuse 方向 |
|---|---|---|---|---|
| 1 | Personal AI Ledger | 个人 AI 账本 | Cloudflare Workers, D1 | 小微企业记账、票据数字化 |
| 2 | Belt Road Study & Employment DB | 一带一路学习与就业数据库 | Next.js, TS, Supabase | 教育信息门户、高校管理平台 |
| 3 | Family Health Management | 家族健康管理 Web 应用 | Next.js, Supabase, Drizzle | 家庭健康仪表盘、员工健康计划 |
| 4 | BP Web Monitor | 血压 Web 监控系统 | Next.js, TS, PG, Supabase | 患者数据采集、慢病监测门户 |

> **No private data included. No implied customer deliveries. No screenshots inserted without reviewed assets. No promise on demo availability.**
> 不含私密数据，不暗示客户交付成果，未附未经审阅图片，不承诺演示可用。
