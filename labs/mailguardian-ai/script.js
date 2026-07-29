let currentLang = 'en'; // 預設為英文

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('langBtn');
    const updateDateSpan = document.getElementById('updateDate');

    // 1. 自動抓取文件的最後修改時間並格式化為 YYYY-MM-DD
    const updateTime = new Date(document.lastModified);
    const formattedDate = updateTime.toISOString().split('T')[0];
    updateDateSpan.textContent = formattedDate;

    // 2. 中英文切換邏輯
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        document.getElementById('htmlLang').lang = currentLang === 'zh' ? 'zh-TW' : 'en';

        // 切換所有帶有 data-zh 與 data-en 的文字
        const elements = document.querySelectorAll('[data-zh]');
        elements.forEach(el => {
            el.innerHTML = el.getAttribute(`data-${currentLang}`);
        });

        // 按鈕本身的文字提示切換
        if (currentLang === 'en') {
            langBtn.textContent = "中文 / EN";
        } else {
            langBtn.textContent = "EN / 中文";
        }
    });
});
