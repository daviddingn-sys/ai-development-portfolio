# Family Health Management Web Platform / 家庭健康管理Web平台

[Back to portfolio / 返回作品集](../../README.md)

[Public source code / 公开源码](https://github.com/daviddingn-sys/family-companion-platform)

## Project / 项目目标

EN: A multi-member family records platform for shared health-related information, visual trends and periodic summaries.

中文：面向家庭多成员的资料管理平台，提供健康记录、趋势图表和周期性汇总。

## Implemented application / 已实现结构

- Next.js, Supabase and Drizzle ORM application / Next.js、Supabase与Drizzle ORM应用
- Family, member and role-based management / 家庭、成员和角色权限管理
- Blood-pressure records with chart visualization / 血压记录及图表展示
- Medication logs and reminder records / 用药记录与提醒事项
- Rule-based weekly and monthly reporting / 规则驱动的周报及月报
- Spreadsheet import/export and record-management workflows / 表格导入导出及记录管理流程

## Isolated interface preview / 隔离界面预览

**EN:** On 27 October 2026, a locally added portfolio-only route in a clone of the project rendered successfully in Next.js (HTTP 200). It reuses the project's Card components and styling, with entirely fictional family counts, member names, BP values and reminders. This preview route has **not** been committed to the original source repository. It does **not** demonstrate working Supabase authentication, database queries, saving records or production readiness.

**中文：** 2026年10月27日，在项目本地副本中增加仅供作品集演示的页面，复用原有Card组件和样式，实际通过Next.js渲染成功（HTTP 200）。家庭数量、成员、血压数值和提醒均为虚构数据。**演示路由未提交至原项目仓库**，不代表Supabase认证、数据库查询、数据写入或生产环境已验收。

![Family dashboard component preview with synthetic data / 家庭健康工作台组件与合成数据预览](synthetic-family-preview.png)

## Business application / 可参考的客户场景

EN: A technical reference for permission-based member portals, record-management software, responsive dashboards and reporting systems. A commercial deployment requires its own information-security and acceptance review.

中文：可供会员档案管理、权限型协作平台、响应式数据看板与报表系统定制时参考。商业部署需要另行完成安全、隐私与功能验收。

## Boundaries / 能力边界

A public code repository is not a verified live hosted demo. Reminder records do not imply push notifications. The project is not an AI medical adviser, diagnostic system or medical device. No private health records or personal identities are published in this portfolio.

源码仓库公开不代表在线演示已验收。提醒记录不等于自动推送，也不包含AI医学诊断能力。本公开作品集不包含私人健康记录和可识别个人身份的信息。
