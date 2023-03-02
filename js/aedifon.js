console.log('object');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const pagBtns = document.querySelectorAll('.fs-cmsload_page-button');

        if (pagBtns.length) {
            for (const btn of pagBtns) {
                const val = Number(btn.textContent);
                if (val <= 9) {
                    btn.textContent = `0${val}`;
                }
            }
        }
    }, 2000);
});
