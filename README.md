# 情侣空间

一个使用 React + TypeScript 构建的移动端优先的前端项目。

## 技术栈

- **React 18** - 现代化的前端框架
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 快速的构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Less** - CSS 预处理器
- **移动端优化** - 专为手机浏览体验设计

## 功能特性

- 📱 移动端优先设计
- 🎨 现代化的 UI 界面
- ⚡ 快速的开发体验
- 🔒 TypeScript 类型安全
- 📦 优化的打包体积

## 开始使用

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

开发服务器将在 `http://localhost:5200` 启动。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
feifeiguanguan/
├── src/
│   ├── App.tsx          # 主应用组件
│   ├── App.css          # 应用样式
│   ├── main.tsx         # 应用入口
│   ├── index.css        # 全局样式（包含 Tailwind 指令）
│   └── styles/
│       ├── variables.less  # Less 变量定义
│       └── example.less    # Less 使用示例
├── index.html           # HTML 模板
├── vite.config.ts       # Vite 配置（已配置 Less 支持）
├── tailwind.config.js   # Tailwind CSS 配置
├── postcss.config.js    # PostCSS 配置
├── tsconfig.json        # TypeScript 配置
└── package.json         # 项目配置
```

## 样式系统

### Tailwind CSS

项目已集成 Tailwind CSS，可以直接在组件中使用 Tailwind 工具类：

```tsx
<div className="flex items-center justify-center p-4 bg-gradient-to-r from-pink-500 to-purple-500">
  <h1 className="text-white text-2xl font-bold">Hello Tailwind</h1>
</div>
```

### Less 预处理器

项目支持 Less 预处理器，可以使用变量、嵌套、Mixin 等功能：

```less
// 导入变量文件
@import './styles/variables.less';

.my-component {
  color: @primary-color;
  padding: 16px;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  .nested-class {
    .card-shadow();
  }
}
```

在组件中使用 Less：

```tsx
import './Component.less'
```

## 移动端优化

- 响应式设计，适配各种屏幕尺寸
- 触摸友好的交互体验
- 防止双击缩放
- 优化的字体大小和间距
- 横屏模式适配

## 开发规范

- 使用 TypeScript 进行类型检查
- 遵循 React Hooks 最佳实践
- 组件化开发，保持代码可维护性
- 移动端优先的 CSS 设计

## License

MIT
