document.querySelectorAll('.color-box').forEach(box => {
    box.addEventListener('click', () => document.fullscreenElement ? document.exitFullscreen() : box.requestFullscreen());
});