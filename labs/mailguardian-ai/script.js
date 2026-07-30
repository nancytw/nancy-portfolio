document.addEventListener("DOMContentLoaded", function() {
    // 1. 自動抓取並填入絕對正確的更新日期 (對應 id="lastUpdated")
    const dateElement = document.getElementById("lastUpdated");
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
            currentLang = currentLang === 'en' ? 'zh' : 'en';
            
            const langElements = document.querySelectorAll('.lang');
            
            langElements.forEach(el => {
                if (currentLang === 'en') {
                    el.textContent = el.getAttribute('data-en');
                } else {
                    el.textContent = el.getAttribute('data-zh');
                }
            });
        });
    }
});
