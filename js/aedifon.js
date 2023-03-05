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
// --------------------

const scroll = document.querySelector('.btn').getBoundingClientRect().top;
console.log(scroll);

window.addEventListener('scroll', () => {
    const scroll = document
        .querySelector('.aed-test')
        .getBoundingClientRect().top;
    console.log(scroll);
});

// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();

//     if (scroll >= 500) {
//         $('.clearHeader').addClass('darkHeader');
//     } else {
//         $('.clearHeader').removeClass('darkHeader');
//     }
// });

// підказка

function addToolTip() {
    let tooltipElem;

    document.onmouseover = function (event) {
        let target = event.target;

        // якщо у нас є HTML підказка...
        let tooltipHtml = target.dataset.tooltip;
        if (!tooltipHtml) return;

        // ...створіть елемент підказки

        tooltipElem = document.createElement('div');
        tooltipElem.className = 'tooltip';
        tooltipElem.innerHTML = tooltipHtml;
        document.body.append(tooltipElem);

        // розташуйте його над анотованим елементом (угорі по центру)
        let coords = target.getBoundingClientRect();

        let left =
            coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
        if (left < 0) left = 0; // не перетинайте лівий край вікна

        let top = coords.top - tooltipElem.offsetHeight - 25;
        if (top < 0) {
            // якщо перетинає верхній край вікна, розташуйте знизу
            top = coords.top + target.offsetHeight + 5;
        }

        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function (e) {
        if (tooltipElem) {
            tooltipElem.remove();
            tooltipElem = null;
        }
    };
}

addToolTip();
