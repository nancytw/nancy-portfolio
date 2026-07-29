document.addEventListener("DOMContentLoaded", function() {
    // 1. 自動填入最後更新時間
    const dateObj = new Date();
    const formattedDate = dateObj.getFullYear() + "-" + 
                          String(dateObj.getMonth() + 1).padStart(2, '0') + "-" + 
                          String(dateObj.getDate()).padStart(2, '0');
    document.getElementById("update-date").textContent = formattedDate;

    // 2. 中英雙語切換邏輯
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = 'zh'; // 預設語言：繁體中文

    langToggleBtn.addEventListener('click', () => {
        // 切換語言標記
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        
        // 選取所有帶有 'lang' class 的元素
        const langElements = document.querySelectorAll('.lang');
        
        langElements.forEach(el => {
            if (currentLang === 'en') {
                el.textContent = el.getAttribute('data-en');
            } else {
                el.textContent = el.getAttribute('data-zh');
            }
        });

        // 可以在這邊選擇是否要更改按鈕上的文字
        // langToggleBtn.textContent = currentLang === 'zh' ? '🌐 EN / 中文' : '🌐 中文 / EN';
    });
});
