// 自動抓取更新時間與升級版雙語切換邏輯 (使用 innerHTML 防止跑版)
document.addEventListener('DOMContentLoaded', () => {
    // 1. 自動填入左上角最後更新日期
    const dateSpan = document.getElementById('last-updated-date');
    if (dateSpan) {
        const today = new Date().toISOString().split('T')[0];
        dateSpan.textContent = `Last Updated: ${today}`;
    }

    // 1b. 自動填入 footer 年份
    const yearSpan = document.getElementById('footer-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. 中英文雙語切換功能 (預設為英文版)
    const langBtn = document.getElementById('lang-switch-btn');
    let isChinese = false; // 預設英文，初次點擊切換為中文

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            isChinese = !isChinese;
            
            // 抓取所有包含翻譯屬性的元素
            const elementsToTranslate = document.querySelectorAll('[data-zh]');

            elementsToTranslate.forEach(el => {
                // 改用 innerHTML 取代 textContent，確保 <br> 換行與 <strong> 標籤不被洗掉
                const currentHtml = el.innerHTML;
                const targetHtml = el.getAttribute('data-zh');
                
                // 互換內文與對應語言屬性
                el.innerHTML = targetHtml;
                el.setAttribute('data-zh', currentHtml);
            });

            // 按鈕文字隨狀態切換
            langBtn.textContent = isChinese ? 'EN / 中文' : '中文 / EN';
        });
    }
});
