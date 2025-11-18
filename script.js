// Theme toggle: sauvegarde choix dans localStorage
document.addEventListener('DOMContentLoaded', () => {
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// If user previously saved a preference, apply it
const saved = localStorage.getItem('site-theme');
if (saved === 'light') {
// remove dark styling: set light variables
body.style.backgroundColor = '#ffffff';
body.style.color = '#000000';
body.classList.remove('dark');
} else {
// default -> dark (we already use dark in CSS)
body.classList.add('dark');
}

if (toggle) {
toggle.addEventListener('click', () => {
// Toggle visual (we switch styles by toggling a .dark class)
const isDark = body.classList.toggle('dark');

if (isDark) {
localStorage.setItem('site-theme', 'dark');
// Ensure CSS variables handle most colors; but in case:
body.style.backgroundColor = '';
body.style.color = '';
} else {
localStorage.setItem('site-theme', 'light');
// apply inline for quick reverse (CSS can be extended later)
body.style.backgroundColor = '#ffffff';
body.style.color = '#000000';
}
});
}
});
