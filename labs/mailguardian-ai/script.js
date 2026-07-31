// 自動抓取更新時間與雙語切換邏輯 (按鈕文字不顯示「切換」)
document.addEventListener('DOMContentLoaded', () => {
    // 1. 自動填入左上角最後更新日期
    const dateSpan = document.getElementById('last-updated-date');
    if (dateSpan) {
        const today = new Date().toISOString().split('T')[0];
        dateSpan.textContent = `Last Updated: ${today}`;
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
                const currentText = el.textContent;
                const targetText = el.getAttribute('data-zh');
                
                el.textContent = targetText;
                el.setAttribute('data-zh', currentText);
            });

            // 按鈕文字隨狀態切換 (不帶「切換」二字)
            langBtn.textContent = isChinese ? 'EN / 中文' : '中文 / EN';
        });
    }
});
