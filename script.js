// Переключатель темы
const themeToggle = document.createElement('button');
themeToggle.className = 'btn btn--secondary theme-toggle';
themeToggle.type = 'button';
themeToggle.setAttribute('aria-pressed', 'false');
themeToggle.innerHTML = '🌙 Тёмная тема';

// Добавляем кнопку переключения темы в шапку
document.addEventListener('DOMContentLoaded', function() {
    const headerInner = document.querySelector('.site-header__inner');
    if (headerInner) {
        headerInner.appendChild(themeToggle);
    }
    
    // Инициализация темы
    const KEY = 'theme';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Автовыбор: системная тема или сохранённый выбор пользователя
    if (localStorage.getItem(KEY) === 'dark' || (!localStorage.getItem(KEY) && prefersDark)) {
        document.body.classList.add('theme-dark');
        themeToggle.setAttribute('aria-pressed', 'true');
        themeToggle.innerHTML = '☀️ Светлая тема';
    }
    
    // Переключение по кнопке с сохранением в localStorage
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('theme-dark');
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.innerHTML = isDark ? '☀️ Светлая тема' : '🌙 Тёмная тема';
        localStorage.setItem(KEY, isDark ? 'dark' : 'light');
    });
});

// Плавная прокрутка для якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});