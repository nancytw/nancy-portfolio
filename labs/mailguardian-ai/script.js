let currentLang = 'zh';

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('langBtn');
    const testBtn = document.getElementById('testBtn');
    const resultText = document.getElementById('resultText');
    const lastUpdatedSpan = document.getElementById('lastUpdated');

    // 1. 自動抓取文件的最後修改時間
    const updateTime = new Date(document.lastModified);
    const formattedDate = updateTime.toISOString().split('T')[0]; // 格式化為 YYYY-MM-DD

    function updateFooterText() {
        if (currentLang === 'zh') {
            lastUpdatedSpan.textContent = `🕒 最後更新時間：${formattedDate}`;
        } else {
            lastUpdatedSpan.textContent = `🕒 Last Updated: ${formattedDate}`;
        }
    }

    // 初始化顯示時間
    updateFooterText();

    // 2. 語言切換邏輯
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        document.getElementById('htmlLang').lang = currentLang === 'zh' ? 'zh-TW' : 'en';
        
        const elements = document.querySelectorAll('[data-zh]');
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${currentLang}`);
        });

        // 切換語言時同步更新頁尾時間的文字
        updateFooterText();
    });

    // 3. 互動測試按鈕
    testBtn.addEventListener('click', () => {
        if (currentLang === 'zh') {
            resultText.textContent = "✅ 狀態正常：前端 JavaScript 執行成功，隨時可串接 Azure Logic App API！";
        } else {
            resultText.textContent = "✅ Status Normal: Frontend JS execution successful, ready to connect Azure Logic App API!";
        }
    });
});
