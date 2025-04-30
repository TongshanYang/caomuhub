document.addEventListener('DOMContentLoaded', function () {
    // 获取侧边栏的所有链接
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

    // 为每个链接添加点击事件监听器
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // 阻止默认的链接跳转行为

            // 为当前链接设置下划线
            sidebarLinks.forEach(alink => {
                alink.style.setProperty('text-decoration', 'none');
            });
            this.style.setProperty('text-decoration', 'underline');

            // 获取目标元素的 ID
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // 获取所有内容区域
            const allContentAreas = document.querySelectorAll('.shouye, .jianli, .biji, .zuopin');

            // 隐藏所有内容区域并添加淡出动画
            allContentAreas.forEach(area => {
                if (area.style.display !== 'none') {
                    area.classList.remove('fade-in');
                    area.classList.add('fade-out');
                    setTimeout(() => {
                        area.style.display = 'none';
                    }, 100);
                }
            });

            // 显示目标内容区域并添加淡入动画
            setTimeout(() => {
                if (targetId === 'shouye') {
                    targetElement.style.display = 'flex';
                } else {
                    targetElement.style.display = 'block';
                }
                targetElement.classList.remove('fade-out');
                targetElement.classList.add('fade-in');
            }, 100);
        });
    });
});