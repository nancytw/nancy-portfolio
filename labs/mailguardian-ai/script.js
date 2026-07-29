:root {
    --bg-color: #0f172a;
    --card-bg: #1e293b;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --accent: #38bdf8;
    --accent-glow: rgba(56, 189, 248, 0.15);
    --border: #334155;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-main);
    line-height: 1.6;
    padding: 40px 20px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

/* 頂部列（右上角時間與切換按鈕） */
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

.top-update-time {
    font-size: 0.85rem;
    color: var(--text-muted);
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    padding: 6px 12px;
    border-radius: 6px;
}

.lang-btn {
    background-color: rgba(56, 189, 248, 0.1);
    border: 1px solid var(--accent);
    color: var(--accent);
    padding: 6px 14px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 600;
    transition: background-color 0.2s;
}

.lang-btn:hover {
    background-color: rgba(56, 189, 248, 0.2);
}

header {
    text-align: center;
    margin-bottom: 40px;
}

.badge {
    display: inline-block;
    background-color: var(--accent-glow);
    color: var(--accent);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 15px;
    border: 1px solid rgba(56, 189, 248, 0.3);
}

h1 {
    font-size: 2.2rem;
    margin-bottom: 10px;
    letter-spacing: -0.5px;
}

p.subtitle {
    color: var(--text-muted);
    font-size: 1.1rem;
}

.card {
    background-color: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 30px;
    margin-bottom: 25px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

h2 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: var(--accent);
}

ul {
    list-style-type: none;
}

li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    color: var(--text-muted);
}

li::before {
    content: "•";
    color: var(--accent);
    position: absolute;
    left: 0;
    font-weight: bold;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
}

.tag {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    color: var(--text-main);
}

footer {
    text-align: center;
    margin-top: 50px;
    color: var(--text-muted);
    font-size: 0.85rem;
}

.footer-author {
    color: var(--accent);
    font-weight: 500;
    margin-bottom: 6px;
}

/* Mobile Responsive 手機響應式排版 */
@media (max-width: 768px) {
    body {
        padding: 20px 15px;
    }
    .top-bar {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    h1 {
        font-size: 1.75rem;
    }
    p.subtitle {
        font-size: 1rem;
    }
    .card {
        padding: 20px;
    }
}
