// ========== HIDE LOADER ON PAGE LOAD ==========
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// ========== THREE.JS 3D BACKGROUND ==========
const container = document