# Blood Pressure Web Monitor / 血压记录Web工具

[Back to portfolio / 返回作品集](../../README.md)

## Project / 项目

EN: A web application for organizing blood-pressure readings and viewing trends using charts, historical records and spreadsheet workflows.

中文：面向血压数据录入、历史记录查询、图表趋势分析与电子表格数据管理的Web应用。

## Demonstrated scope / 工程内容

- Next.js, React and TypeScript application / Next.js、React与TypeScript应用
- PostgreSQL and Supabase integrations / PostgreSQL与Supabase集成
- Blood-pressure record management and charts / 血压记录管理与趋势图表
- Spreadsheet import and export workflows / 电子表格导入导出流程
- Image-assisted or OCR-related integration subject to configuration / 图片辅助和OCR相关模块依赖具体配置

## Isolated interface demo / 隔离演示截图

The following image is a screenshot of the **actual Next.js overview interface running locally** on 27 October 2026. Values (119/78, 4/31 and other totals) are **synthetic fixtures injected through Playwright request interception**, with a fictional test phone number. This does **not** demonstrate a working production database, image OCR accuracy or successful persistence of BP readings.

以下图片为2026年10月27日实际启动的Next.js概览页面。显示的119/78、4/31等数字均通过Playwright拦截测试接口注入，用户为虚构测试身份。**该截图不能证明生产数据库、OCR识别率或记录持久化已经验收。**

![BP Monitor real front-end running with synthetic data / 血压Web真实前端与合成测试数据](synthetic-overview.png)

## Potential reuse / 可迁移场景

EN: Custom data-entry systems, trend dashboards and exportable management reports. A new deployment needs validation of permissions, data protection and integrations.

中文：可参考用于数据录入平台、趋势看板、可导出管理报表。新部署须单独验证权限、数据保护及集成配置。

## Verification limits / 验证边界

The private project contains a large collection of images whose privacy and provenance have not been verified. No images from that folder have been copied into this public portfolio. No patient data, private health records or credentials are shared.

原项目中存在来源和隐私状况尚未核验的图片素材，本案例没有复制或公开这些图片，也没有公开真实血压记录、个人健康信息和账号密钥。

This is a software case study, not a medical device or diagnostic service. Production readiness has not been independently verified. / 仅为软件案例，不是医疗设备或诊断服务，尚未完成独立生产验收。
