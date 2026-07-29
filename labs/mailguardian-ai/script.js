document.addEventListener("DOMContentLoaded", function() {
    // 1. 自動抓取並填入絕對正確的更新日期 (格式 YYYY-MM-DD)
    const dateElement = document.getElementById("update-date");
    if (dateElement) {
        const d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        dateElement.textContent = `${year}-${month}-${day}`;
    }

    // 2. 中英雙語切換邏輯 (預設為英文)
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = 'en'; // 初始狀態為英文

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            // 切換語言狀態
            currentLang = currentLang === 'en' ? 'zh' : 'en';
            
            // 選取所有帶有 'lang' class 的元素並替換文字
            const langElements = document.querySelectorAll('.lang');
            
            langElements.forEach(el => {
                if (currentLang === 'en') {
                    el.textContent = el.getAttribute('data-en');
                } else {
                    el.textContent = el.getAttribute('data-zh');
                }
            });
            
            // 可以根據喜好，決定按鈕文字要不要跟著變
            // langToggleBtn.textContent = currentLang === 'en' ? '🌐 中文 / EN' : '🌐 EN / 中文';
        });
    }
});
