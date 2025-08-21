Tag page template usage

- To add a new tag link in `tags.html`, copy the sample line inside the `.tags_card` block and change the visible text only. The click handler will route to `tag.html?tag=...` automatically.

# 导航栏组件包

这是一个可复用的导航栏组件包，包含 HTML 结构、CSS 样式和 JavaScript 功能。

## 文件结构

```
components/
├── navbar.html      # 导航栏HTML结构
├── navbar.css       # 导航栏样式
├── navbar.js        # 导航栏功能脚本
└── README.md        # 使用说明
```

## 使用方法

### 1. 引入 CSS 文件

在 HTML 页面的`<head>`标签中添加：

```html
<link rel="stylesheet" href="components/navbar.css" />
```

### 2. 引入 JavaScript 文件

在 HTML 页面的`</body>`标签前添加：

```html
<script src="components/navbar.js"></script>
```

### 3. 插入导航栏 HTML

在页面的`<body>`标签开始处添加：

```html
<!-- 引入导航栏组件 -->
<div id="navbar-container"></div>

<script>
  // 动态加载导航栏HTML
  fetch('components/navbar.html')
    .then((response) => response.text())
    .then((html) => {
      document.getElementById('navbar-container').innerHTML = html;
    });
</script>
```

## 功能特性

### 🎨 视觉效果

- **毛玻璃效果**：半透明背景，模糊效果
- **悬停动画**：鼠标悬停时的平滑过渡
- **响应式设计**：适配移动端和桌面端
- **Logo 动画**：点击和拖拽手势支持

### 📱 交互功能

- **下拉菜单**：分类和页面的下拉选项
- **联系模态框**：Let's Talk 按钮触发的联系信息
- **复制功能**：一键复制联系方式
- **手势支持**：Logo 支持上划手势

### 🔧 自定义选项

#### 修改 Logo

在`navbar.html`中修改：

```html
<div class="afime-text">你的品牌名</div>
```

#### 修改导航菜单

在`navbar.html`中修改菜单项：

```html
<div class="nav-item">
  <a href="your-page.html" style="text-decoration: none; color: inherit;">
    <span>你的菜单项</span>
  </a>
</div>
```

#### 修改联系信息

在`navbar.html`中修改模态框内容：

```html
<div class="contact-item">
  <span class="contact-label">你的标签:</span>
  <span class="contact-value">你的联系方式</span>
  <button class="copy-btn" onclick="copyToClipboard('你的联系方式')">复制</button>
</div>
```

#### 修改样式

在`navbar.css`中自定义颜色和样式：

```css
.lets-talk-btn {
  background: linear-gradient(45deg, #你的颜色1, #你的颜色2);
}
```

## 兼容性

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ 移动端浏览器

## 注意事项

1. **路径问题**：确保组件文件的路径正确
2. **依赖关系**：CSS 必须在 HTML 之前加载，JS 必须在 HTML 之后加载
3. **ID 冲突**：确保页面中没有重复的 ID（如`logoElement`、`contactModal`）
4. **字体支持**：建议使用系统字体或 Web 字体

## 更新日志

### v1.0.0 (2024-01-14)

- ✨ 初始版本发布
- 🎨 完整的导航栏样式
- 📱 响应式设计
- 🔧 可自定义配置
- ✨ 手势支持功能

## 许可证

MIT License - 可自由使用和修改
