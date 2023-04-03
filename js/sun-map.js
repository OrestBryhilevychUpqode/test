const refs = {
    btns: document.querySelectorAll('.js-logo'),
};

if (refs.btns.length > 0) {
    for (const btn of refs.btns) {
        btn.addEventListener('click', e => {
            const numberPopup = btn.dataset.company;
            const popup = document.querySelector(`.map-popup-${numberPopup}`);

            popup.classList.add('isOpen');

            document.addEventListener('click', e => {
                let isButton = e.composedPath().includes(btn);
                let isPopup = e.composedPath().includes(popup);

                if (!isButton && !isPopup) {
                    popup.classList.remove('isOpen');
                    btn.classList.remove('isOpen');
                }

                if (isButton) {
                    popup.classList.add('isOpen');
                    btn.classList.add('isOpen');
                }
            });
        });
    }
}
