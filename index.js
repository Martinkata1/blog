console.log('Happy developing ✨');
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('hidden'); // Задаване на затворено меню при зареждане
});
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('hidden');
    content.classList.toggle('shifted');
}
