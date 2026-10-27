# Personal AI Ledger — AI辅助开发案例 / AI-assisted development case study

## 中文

这是一个通过AI辅助迭代开发的单用户个人财务Web应用。它将自然语言、系统听写文本和截图识别汇入可编辑的交易草稿，用户核对后入账；同时支持账本管理、明细筛选、月度分析、历史Excel/CSV导入和报销关联。

技术架构采用原生JavaScript前端、Cloudflare Workers API与D1数据库。浏览器通过自托管Tesseract.js执行中英OCR；规则解析与分类建议复用既有逻辑。项目未使用付费OpenAI API，“AI辅助开发”描述开发方式，而非每笔交易调用大模型。

财务正确性是核心工程重点：手动新增默认人民币，明确马币凭证仍保留MYR；商品原币与实际扣款分别保存，跨币种消费优先按实际人民币扣款统计一次。来源流水号、金额、时间、账户与支付服务商别名共同参与疑似重复检查，幂等编号用于避免重复提交。不确定金额、币种和归属需要人工核对。

可演示流程包括文字识别、三种录入模式切换、跨币种核对、明细详情、账本分类图表与筛选钻取。随附截图来自当前应用运行于隔离内存数据库的合成数据，不是真实账单；它们证明页面运行与数据展示，不代表所有支付截图准确率。

适用场景：自部署个人记账、多币种生活支出管理、个人垫款与报销核对，以及全栈产品迭代作品展示。目标用户需要具备基础部署能力。当前为单用户令牌鉴权，不是多租户财务SaaS。

iPhone自动截图链路已有上传鉴权、临时存储、一次领取与浏览器OCR衔接实现及接口测试。可安装快捷指令文件尚未导出，独立新设备背面轻点→截图→上传→Safari→OCR→确认仍待实机验收，不作为已交付能力宣传。

本轮公开测试从空数据库和合成数据独立运行，验证默认币种、跨币种字段、保存及人民币统计、重复提交、图片传输安全和模拟导入。桌面浏览器实测合成页面及钻取；窄屏为Edge响应式检查，不能替代真实iPhone Safari验收。

## English

Personal AI Ledger is a single-user finance web application developed through AI-assisted iteration. Natural-language input, system dictation text and receipt recognition converge on an editable draft that requires human confirmation before saving. The application also implements ledger management, transaction filtering, monthly analysis, Excel/CSV imports and reimbursement relationships.

The stack is plain JavaScript, Cloudflare Workers and D1. Self-hosted Tesseract.js performs Chinese/English OCR in the browser; deterministic parsing and classification logic support transaction suggestions. No paid OpenAI API is used. “AI-assisted” refers to the development process, rather than an LLM processing every transaction.

Correctness work separates original currency from actual payment. Manual entries default to CNY, while explicit MYR evidence takes precedence. A cross-currency purchase is counted once using the actual CNY debit. Source references and transaction evidence support duplicate warnings, and idempotency protects repeated submissions. Ambiguous financial facts remain subject to review.

The supplied screenshots show the actual application running against an isolated synthetic database, with fictional merchants and accounts. Demonstrable paths include input mode switching, cross-currency review, transaction details and chart-to-list navigation. This is suitable as a full-stack development portfolio and a future self-hosted personal-finance source kit, not a multi-tenant SaaS.

The screenshot handoff API and client integration exist and have automated coverage. Distributable iPhone Shortcuts files and independent on-device Back Tap-to-save acceptance are still pending. Narrow-window Edge testing is not iPhone Safari certification. OCR accuracy across real-world receipt layouts is not guaranteed.
