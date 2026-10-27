# Personal AI Ledger · AI辅助开发作品集

单用户个人财务Web应用，围绕“识别→人工核对→入账→可追溯统计”构建。当前应用版本V1.1.2。本目录为脱敏作品集准备材料，提交到私人仓库，不开放私人账本或完整源码。

## 产品功能

- 文字、语音转写和截图三种录入模式，统一核对草稿。
- 多账本、日期分组明细、筛选与详情编辑。
- 月度资金流出、生活消费、账本分类与趋势分析。
- XLSX/XLS/CSV历史导入及报销关联管理。
- 日常疑似重复提醒、幂等提交和原币/实际扣款分离。

## 技术架构

~~~text
响应式Web / 原生JavaScript
  ├─ 系统听写文本 + 规则解析
  ├─ 自托管Tesseract.js浏览器OCR
  └─ 核对表单 → 鉴权Workers API → D1 SQLite
                              └─ 静态资源ASSETS / 临时图片清理cron
~~~

图片快捷指令HTTPS上传、鉴权暂存与一次领取已实现；OCR仍在浏览器执行，识别不自动保存。运行时没有付费OpenAI API。“AI辅助开发”指开发过程，不暗示LLM自动判断全部交易。

## 已验证能力及边界

| 能力 | 已有验证 |
|---|---|
| 默认币种与跨币种 | 手动默认CNY，明确MYR优先；合成跨币种数据验证原币/扣款分别保存，实际CNY统计一次 |
| 重复检测 | 精确流水号、服务商别名、疑似匹配、确认不同交易、并发及重放自动化测试 |
| 图片传输 | 鉴权、类型/尺寸/大小限制、过期、一次领取、清理和频率限制接口测试 |
| 页面流程 | 隔离合成账本的实际Windows浏览器，模式切换、明细、统计、钻取及深色主题 |
| 干净副本核心测试 | 上一轮工作区合成夹具独立验证通过；本次提交仅作品材料，不包含尚未提交的测试修改 |

真实iPhone完整背面触发流程、可分发快捷指令文件、跨设备OCR性能仍待验收。窄屏截图是Edge响应式展示，不是Safari实机认证；不提供识别准确率或所有账单版本兼容保证。

## 演示与案例

- [中英文完整案例 / Bilingual case study](CASE-STUDY-ZH-EN.md)
- [能力证据与限制](CAPABILITY-EVIDENCE.md)
- [8张截图及演示金额说明](SCREENSHOTS.md)
- [展示画廊源文件](index.html)：下载目录后在浏览器本地打开；未启用GitHub Pages。
- [合成交易数据](demo-data/transactions.synthetic.json) / [合成凭证文字](demo-data/receipt.synthetic.txt)
- [展示文件白名单](PUBLIC-FILES.json)

![合成数据记账首页](screenshots/01-home-desktop.jpg)
![跨币种详情](screenshots/03-cross-currency-detail.jpg)

所有演示交易、商家、账户与备注均虚构；固定汇率仅为演示值。生产地址、数据库标识、真实账单与私人规则不作为展示材料提供。

## 适合承接的定制开发

可作为需求沟通样例：单用户Web工具、响应式数据管理界面、Cloudflare Workers/D1应用、Excel/CSV导入预览、OCR辅助核对流程、多币种字段与统计追溯、幂等提交及回归测试。新增业务需单独评估范围、数据模型与验收，不将现有单用户工具包装为已实现的多租户SaaS或企业合规系统。

## English overview

An AI-assisted development portfolio for a single-user finance web application, built with plain JavaScript, Cloudflare Workers and D1. Browser OCR and deterministic parsing create editable drafts; human confirmation is required. Evidence covers synthetic currency flows, duplicate handling, screenshot transport and desktop browser navigation. Screenshots contain fictional data only. Full iPhone on-device acceptance and distributable Shortcuts files remain pending. Suitable customization discussions include self-hosted web tools, data import/review workflows, responsive dashboards and serverless APIs.
