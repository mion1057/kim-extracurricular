const notify = document.querySelector('.notify');

function notify_visable() {
    if (window.scrollY > 1500) {
        notify.classList.remove('none');
    } else {
        notify.classList.add('none');
    }
}
window.addEventListener('load', () => {
    notify_visable();
})
window.addEventListener('scroll', () => {
    notify_visable();
})