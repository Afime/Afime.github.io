// 导航栏功能脚本

// 模态框功能
function openContactModal() {
   document.getElementById('contactModal').style.display = 'block';
}

function closeContactModal() {
   document.getElementById('contactModal').style.display = 'none';
}

// 复制到剪贴板功能
function copyToClipboard(text) {
   if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function() {
         showCopySuccess();
      }, function(err) {
         console.error('复制失败: ', err);
         fallbackCopyTextToClipboard(text);
      });
   } else {
      fallbackCopyTextToClipboard(text);
   }
}

function fallbackCopyTextToClipboard(text) {
   const textArea = document.createElement('textarea');
   textArea.value = text;
   textArea.style.position = 'fixed';
   textArea.style.left = '-999999px';
   textArea.style.top = '-999999px';
   document.body.appendChild(textArea);
   textArea.focus();
   textArea.select();
   
   try {
      document.execCommand('copy');
      showCopySuccess();
   } catch (err) {
      console.error('复制失败:', err);
   }
   
   document.body.removeChild(textArea);
}

function showCopySuccess() {
   // 创建成功提示
   const notification = document.createElement('div');
   notification.textContent = '复制成功！';
   notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #4CAF50;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      z-index: 3000;
      animation: slideIn 0.3s ease;
   `;
   
   document.body.appendChild(notification);
   
   setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => {
         document.body.removeChild(notification);
      }, 300);
   }, 2000);
}

// 点击模态框外部关闭
window.onclick = function(event) {
   const modal = document.getElementById('contactModal');
   if (event.target === modal) {
      closeContactModal();
   }
}

// 上划手势检测
let startY = 0;
let startX = 0;
let isDragging = false;
const logoElement = document.getElementById('logoElement');

// 触摸事件处理
logoElement.addEventListener('touchstart', function(e) {
   startY = e.touches[0].clientY;
   startX = e.touches[0].clientX;
   isDragging = true;
});

logoElement.addEventListener('touchmove', function(e) {
   if (!isDragging) return;
   
   const currentY = e.touches[0].clientY;
   const currentX = e.touches[0].clientX;
   const deltaY = startY - currentY;
   const deltaX = Math.abs(currentX - startX);
   
   // 如果向上滑动距离足够且水平移动不大
   if (deltaY > 50 && deltaX < 30) {
      isDragging = false;
      triggerSwipeUpAnimation();
   }
});

logoElement.addEventListener('touchend', function() {
   isDragging = false;
});

// 鼠标事件处理（桌面端）
logoElement.addEventListener('mousedown', function(e) {
   startY = e.clientY;
   startX = e.clientX;
   isDragging = true;
});

logoElement.addEventListener('mousemove', function(e) {
   if (!isDragging) return;
   
   const currentY = e.clientY;
   const currentX = e.clientX;
   const deltaY = startY - currentY;
   const deltaX = Math.abs(currentX - startX);
   
   // 如果向上滑动距离足够且水平移动不大
   if (deltaY > 50 && deltaX < 30) {
      isDragging = false;
      triggerSwipeUpAnimation();
   }
});

logoElement.addEventListener('mouseup', function() {
   isDragging = false;
});

// 防止拖拽时选中文本
logoElement.addEventListener('selectstart', function(e) {
   e.preventDefault();
});

// 点击Logo触发上划动画
logoElement.addEventListener('click', function(e) {
   // 防止与拖拽事件冲突
   if (isDragging) return;
   triggerSwipeUpAnimation();
});

// 触发画面放大效果
function triggerSwipeUpAnimation() {
   // 禁用所有交互
   document.body.style.pointerEvents = 'none';
   
   // 添加页面缩放效果
   document.body.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
   document.body.style.transform = 'scale(1.1)';
   
   // 短暂延迟后跳转到封面页面
   setTimeout(() => {
      window.location.href = 'index.html';
   }, 300);
}

// 直接返回封面页面（保留备用）
function returnToCover() {
   window.location.href = 'index.html';
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
   console.log('导航栏组件已加载');
});
