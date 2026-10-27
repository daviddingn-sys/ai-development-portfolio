# Case Studies / 核心项目案例

[← Back to README.md](README.md)

---

> **Disclaimer / 免责声明:** All projects are private or personal. No real financial or health data involved. No paid-customer or commercial delivery claims. Not for production use. 所有项目均为私有或个人用途，不涉及真实财务或健康数据，不存在付费客户或商业交付声明，不用于生产环境。

---

## 1. Personal AI Ledger / AI个人记账

**Problem / 问题:**
Managing multi-currency personal expenses in a consolidated, private ledger. Need a way to record expenses in different currencies, capture them conveniently (e.g. screenshot-assisted), and produce simple summaries — without relying on public APIs or paid services.
个人记账中需要统一管理多币种支出。需要一个方式，在不同货币下记录开支、方便地通过截图辅助记录，并生成简单汇总 — 不依赖公开API或付费服务。

**Implemented Features / 实现功能:**
- Private Cloudflare Workers D1 database for multi-currency expense entry.
- Screenshot-assisted capture for quick input of receipts and invoices.
- Bilingual (EN/ZH) interface for personal record keeping.
- Prepared anonymized case data for demonstration purposes only.
- Potential use for small-team expense logs.
- 私有 Cloudflare Workers D1 数据库，支持多币种支出录入。
- 通过截图辅助快速录入收据和发票。
- 中英双语界面，适用于个人记账。
- 使用脱敏准备案例数据，仅用于演示。
- 潜在用途：小型团队支出记录。

**Reuse & Current Status / 复用与当前状态:**
Code structure is modular for potential reuse. **Not mentioned:** realtime exchange rates, Hono, FastAPI, or any claim of production readiness. This is a personal/private tool.
代码结构模块化，具备潜在复用性。**未使用：**实时汇率、Hono、FastAPI，无生产就绪声明。此工具为个人/私有用途。

---

## 2. Belt & Road Study and Employment Database / 一带一路留学就业数据库

**Problem / 问题:**
Tracking country, university, major records for Belt & Road region students and graduates. Need a fees calculator and a CMS/SEO-friendly way to publish information, without relying on centralized government sources.
追踪一带一路地区学生和毕业生的国家、大学、专业记录。需要一个费用计算器和一个对CMS/SEO友好的信息发布方式，不依赖中央政府来源。

**Implemented Features / 实现功能:**
- Private Next.js + React + TypeScript + Supabase stack.
- Country, university, and major record management.
- Tuition and living fees calculator.
- CMS and SEO based on documented code.
- Independent live deployment.
- 私有 Next.js + React + TypeScript + Supabase 架构。
- 国家、大学、专业记录管理。
- 学费和生活费计算器。
- 基于文档代码的CMS和SEO功能。
- 独立部署上线。

**Reuse & Current Status / 复用与当前状态:**
The stack is reusable for similar educational databases. **Accuracy of deployed data has not been verified.** This is a personal project with a live deployment for learning purposes only.
此架构可复用至类似教育数据库。**已部署数据的准确性未经核实。** 此项目为个人学习用途，仅作独立部署演示。

---

## 3. Family Health Management / 家庭健康管理

**Problem / 问题:**
Managing health records for family members, including blood pressure tracking, medication logs, and manual reminders — in a shared family space. Not a medical device or diagnosis tool.
管理家庭成员的健康记录，包括血压追踪、用药记录和手动提醒 — 在一个共享的家庭空间中。不是医疗设备或诊断工具。

**Source / 来源:**
https://github.com/daviddingn-sys/family-companion-platform

**Implemented Features / 实现功能:**
- Public repository, Next.js + Supabase + Drizzle stack.
- Family roles (admin, member).
- Member health records and profile management.
- Blood pressure trend charts.
- Medication logs and manual reminder records.
- Rule-based health reports.
- 公开仓库，Next.js + Supabase + Drizzle 架构。
- 家庭角色管理（管理员、成员）。
- 成员健康档案与资料管理。
- 血压趋势图表。
- 用药记录与手动提醒记录。
- 基于规则的健康报告。

**Reuse & Current Status / 复用与当前状态:**
The codebase is public and can be forked. **Not features:** push notifications, AI-based medical diagnosis, or automated alerts. Not a medical device.
代码库为公开可复用。**无功能：**推送通知、AI医疗诊断或自动警报。非医疗设备。

---

## 4. BP Web Monitor / 血压记录Web

**Problem / 问题:**
A lightweight, private web tool for tracking blood pressure trends locally. Need trend charts, import/export capability, and optional OCR configuration for reading device measurements.
一个轻量、私有的血压追踪Web工具。需要趋势图表、导入/导出功能，以及可选的OCR配置用于读取设备测量数据。

**Implemented Features / 实现功能:**
- Private Next.js + TypeScript + Supabase + PostgreSQL stack.
- Blood pressure trend charts with visualization.
- Data import and export (CSV/JSON).
- Optional OCR configuration for reading BP device readings.
- 私有 Next.js + TypeScript + Supabase + PostgreSQL 架构。
- 血压趋势图表可视化。
- 数据导入/导出（CSV/JSON）。
- 可选OCR配置读取血压计数据。

**Reuse & Current Status / 复用与当前状态:**
Private tool, code available on request. **Not a medical device.** Tracking trends only; no diagnosis or clinical claims.
私有工具，代码可索取。**非医疗设备。** 仅作趋势追踪，无诊断或临床声明。

---

> **Final Note / 最后说明:**
> - No real financial or health data is used in any project. 所有项目均未使用真实财务或健康数据。
> - No paid-customer or commercial delivery claims. 不存在付费客户或商业交付声明。
> - No automatic production-ready claims. Do not suggest this is production-ready. 无自动生产就绪声明，不建议视为生产就绪。
