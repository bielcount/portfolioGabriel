// Alternar entre modo claro e escuro
const toggleTheme = document.querySelector('.toggle-theme');
const body = document.body;

toggleTheme.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    toggleTheme.textContent = body.classList.contains('light-mode') ? '🌙' : '☀️';
});
