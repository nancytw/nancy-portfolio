// 自動抓取更新時間與中英文切換邏輯
document.addEventListener('DOMContentLoaded', () => {
    // 1. 自動填入最後更新日期
    const dateSpan = document.getElementById('last-updated-date');
    if (dateSpan) {
        const today = new Date().toISOString().split('T')[0];
        // 依照你的要求：移除前面的圖示，只保留乾淨的日期文字
        dateSpan.textContent = `Last Updated: ${today}`;
    }

    // 2. 中英文雙語切換功能
    const langBtn = document.getElementById('lang-switch-btn');
    let isEnglish = false;

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            isEnglish = !isEnglish;
            const elementsToTranslate = document.querySelectorAll('[data-en]');

            elementsToTranslate.forEach(el => {
                if (isEnglish) {
                    // 切換成英文
                    const temp = el.textContent;
                    el.textContent = el.getAttribute('data-en');
                    el.setAttribute('data-zh', temp);
                } else {
                    // 切換回中文
                    const zhText = el.getAttribute('data-zh');
                    if (zhText) {
                        el.textContent = zhText;
                    }
                }
            });

            langBtn.textContent = isEnglish ? '切換中文 / ZH' : 'EN / 中文';
        });
    }
});
