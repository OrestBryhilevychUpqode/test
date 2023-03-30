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

window.addEventListener('scroll', () => {
    const scroll = document
        .querySelector('.aed-test')
        .getBoundingClientRect().top;
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

// ------------------------
var swiper = new Swiper('.mySwiper', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper('.mySwiper2', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: swiper,
    },
});

// const gallery = document.querySelector('.gallery');

// gallery.addEventListener('click', onGalleryItemsClick);

// function onGalleryItemsClick(e) {
//     const largeImageUrl = e.target.dataset.src;
//     const instance = basicLightbox.create(`
//     <img src="${largeImageUrl}" width="800" height="600">
// `);

//     instance.show();

//     document.addEventListener('keydown', e => {
//         if (e.code === 'Escape') {
//             instance.close(largeImageUrl);
//         }
//     });
// }

window.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.js-remove-scroll-leo');
    const closeBtn = document.querySelector('.js-add-scroll-leo');
    const menuItems = document.querySelectorAll('.js-menu-leo .nav-link');

    if (openBtn && closeBtn && menuItems.length !== 0) {
        openBtn.addEventListener('click', () => {
            addHidden();

            $(document).mouseup(function (e) {
                var elem = $('.js-menu-leo');
                if (e.target != elem[0] && !elem.has(e.target).length) {
                    removeHidden();
                }
            });
        });

        closeBtn.addEventListener('click', removeHidden);

        for (const item of menuItems) {
            item.addEventListener('click', removeHidden);
        }

        function addHidden() {
            document.querySelector('body').classList.add('over-hidden');
        }

        function removeHidden() {
            document.querySelector('body').classList.remove('over-hidden');
        }
    }
});

// ---------------------------------
// Плавний скрол

$(document).on('click', '.js-pag-link', function (e) {
    e.preventDefault();
    var topFilter = $('.js-top-filter').offset().top;
    var topScr = topFilter - 100;
    $('body, html').animate({ scrollTop: topScr }, 800);
});

// ----------------

const text = ' Привіт я  Вася';

const newText = text.toLocaleLowerCase().split('');
const newArrayText = [];

for (const item of newText) {
    if (item !== ' ') {
        newArrayText.push(item);
    }
}
console.log(newText);
console.log(newArrayText.join(''));
