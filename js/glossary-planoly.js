document.addEventListener('DOMContentLoaded', event => {
    const refs = {
        blocks: document.querySelectorAll('.glossary-info-wrapper'),
        latters: document.querySelectorAll('.glossary-letter'),
        titles: document.querySelectorAll('.glossary-title'),
    };

    if (refs.blocks.length > 0) {
        for (const block of refs.blocks) {
            const isEmpty = block.querySelector('.glossary-empty-state');

            if (isEmpty) {
                block.classList.add('hidden');
            }
        }
    }

    const titleArray = [];

    if (refs.titles.length > 0) {
        for (const title of refs.titles) {
            titleArray.push(title.textContent.toLocaleLowerCase().split('')[0]);
        }
    }

    if (refs.latters.length > 0) {
        Array.from(refs.latters).map(item => {
            const latter = item.textContent.toLocaleLowerCase();

            if (!titleArray.includes(latter)) {
                item.classList.add('non-active');
            }
        });
    }
});
