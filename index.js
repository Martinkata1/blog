document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('hidden');
});
//function toggleSidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     const content = document.querySelector('.content');
//     sidebar.classList.toggle('hidden');
//     content.classList.toggle('shifted');
// }
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');  // Превключване на състоянието на менюто
}

var animation = bodymovin.loadAnimation({
    container: document.getElementById('animContainer'),
    path: 'https://lottie.host/a38c653d-74fb-4325-802a-4737837e11de/smLG7WMgmu.lottie',
    renderer: 'svg',
    loop: true,
    autoplay: true
});
