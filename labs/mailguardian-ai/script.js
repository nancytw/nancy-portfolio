let currentLang = 'zh';

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('langBtn');
    const testBtn = document.getElementById('testBtn');
    const resultText = document.getElementById('resultText');

    // 語言切換邏輯
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        document.getElementById('htmlLang').lang = currentLang === 'zh' ? 'zh-TW' : 'en';
        
        const elements = document.querySelectorAll('[data-zh]');
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${currentLang}`);
        });
    });

    // 互動測試按鈕
    testBtn.addEventListener('click', () => {
        if (currentLang === 'zh') {
            resultText.textContent = "✅ 狀態正常：前端 JavaScript 執行成功，隨時可串接 Azure Logic App API！";
        } else {
            resultText.textContent = "✅ Status Normal: Frontend JS execution successful, ready to connect Azure Logic App API!";
        }
    });
});
