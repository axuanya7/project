# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

林宇轩（axuanya7）的项目展示页。Vite + React SPA，纯 CSS 玻璃拟态效果，部署目标：Cloudflare Pages。

## 开发命令

```bash
npm install          # 安装依赖
npm run dev          # 开发服务器
npm run build        # 生产构建 → dist/
npm run preview      # 预览构建产物
```

## 项目结构

```
project/
├── public/
│   └── 头像.png     # 头像图片，Vite 直接作为静态资源 serve
├── src/
│   ├── App.jsx      # 主组件：项目数据 + ProjectCard + 页面布局
│   ├── global.css   # 全局样式：卡片玻璃效果、按钮、响应式
│   └── main.jsx     # React 入口，导入 global.css
├── index.html       # Vite HTML 模板（Inter 字体）
├── vite.config.js   # base: './'（相对路径，CF Pages 部署必需）
└── dist/            # 构建产物，直接部署到 CF Pages
```

## 样式架构

- 整体基线字体 19.4px，所有尺寸按比例放大
- 卡片使用 CSS `backdrop-filter: blur(40px) saturate(180%)` 实现玻璃拟态效果
- Live Demo 按钮使用 `.demo-btn` CSS 类，同样基于 backdrop-filter
- 卡片悬停效果：`transform: translateY(-4px)` + 增强阴影
- 响应式断点：946px 以下单列布局

## 部署

构建产物是纯静态文件（`dist/`），直接部署到 Cloudflare Pages。构建命令留空，Output directory 填 `/`。自定义域名 `projects.axuanya.xyz`。
