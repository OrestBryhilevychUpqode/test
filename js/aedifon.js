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

// checkbox form

window.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('#aed-checkbox');
    const submit = document.querySelector(
        '#mc_embed_signup input[type="submit"]'
    );
    const parent = submit.parentNode;

    parent.classList.add('btn-disabled');
    console.log(checkbox);
    console.log(submit);
    console.log(parent);

    checkbox.addEventListener('click', validate);
    submit.addEventListener('click', () => {
        console.log('click');
    });

    function validate() {
        if (document.getElementById('aed-checkbox').checked) {
            parent.classList.remove('btn-disabled');
        } else {
            parent.classList.add('btn-disabled');
        }
    }
});
