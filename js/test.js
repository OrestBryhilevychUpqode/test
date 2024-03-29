// (() => {
//     // const modal = document.querySelector('.modal');
//     // const bg = document.querySelector('.bg');
//     // const form = document.querySelector('.form');
//     // const html = document.querySelector('html');
//     // bg.addEventListener('click', () => {
//     //     console.log('bg');
//     //     modal.style.display = 'none';
//     //     html.classList.remove('no-scroll');
//     // });
//     // form.addEventListener('click', () => {
//     //     console.log('form');
//     // });
//     // const tabs = document.querySelectorAll('.js-tab-item');
//     // for (const tab of tabs) {
//     //     tab.addEventListener('click', e => {
//     //         removeActive();
//     //         e.currentTarget.classList.add('active');
//     //         modal.style.display = 'flex';
//     //         html.classList.add('no-scroll');
//     //     });
//     // }
//     // function removeActive() {
//     //     const newTabs = document.querySelectorAll('.js-tab-item');
//     //     for (const tab of newTabs) {
//     //         tab.classList.remove('active');
//     //     }
//     // }
//     // // ------------------------
//     // function updateWidth() {
//     //     document.getElementById('window-width').innerHTML =
//     //         document.documentElement.clientWidth;
//     // }
//     // window.addEventListener('resize', updateWidth);
//     // updateWidth();
//     // try {
//     //     var mp3 =
//     //         'data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
//     //     var audio = new Audio();
//     //     audio.autoplay = true;
//     //     audio.volume = 0;
//     //     audio.addEventListener('play', function () {
//     //         document.querySelector('html').classList.add('autoplay');
//     //         document.querySelector('html').classList.remove('no-autoplay');
//     //     });
//     //     audio.src = mp3;
//     // } catch (e) {
//     //     document.getElementById('autoplay').innerHTML = e;
//     // }
//     // const input = document.querySelector("input[type='email']");
//     // input.placeholder = 'Нужный текст';
// })();

// (function () {
//     // create a new Library instance and store it in a variable called "customBlogPosts"
//     var all = new FsLibrary('.blog-posts-list-all');
//     // run the loadmore Library component on your instance
//     all.loadmore({
//         button: '.load-more-button', // class of Webflow Pagination button
//         resetIx: true, // adds Webflow interactions to newly loaded items
//         loadAll: true, // loads ALL items in your collection load on the page. Required for pagination
//         paginate: {
//             enable: true,
//             itemsPerPage: 1,
//             insertPagination: '.pagination-container-all',
//         },
//         animation: {
//             enable: true,
//             duration: 0.3,
//             easing: 'ease',
//             effects: 'fade',
//         },
//     });
// })();

// // regulatory
// (function () {
//     // create a new Library instance and store it in a variable called "customBlogPosts"
//     var regulatory = new FsLibrary('.blog-posts-list-regulatory');
//     // run the loadmore Library component on your instance
//     regulatory.loadmore({
//         button: '.load-more-button-regulatory', // class of Webflow Pagination button
//         resetIx: true, // adds Webflow interactions to newly loaded items
//         loadAll: true, // loads ALL items in your collection load on the page. Required for pagination
//         paginate: {
//             enable: true,
//             itemsPerPage: 1,
//             insertPagination: '.pagination-container-regulatory',
//         },
//         animation: {
//             enable: true,
//             duration: 0.3,
//             easing: 'ease',
//             effects: 'fade',
//         },
//     });
// })();

// // paginUseCases
// function paginUseCases() {
//     // create a new Library instance and store it in a variable called "customBlogPosts"
//     var useCases = new FsLibrary('.blog-posts-list-use-cases');
//     // run the loadmore Library component on your instance
//     useCases.loadmore({
//         button: '.load-more-button-use-cases', // class of Webflow Pagination button
//         resetIx: true, // adds Webflow interactions to newly loaded items
//         loadAll: true, // loads ALL items in your collection load on the page. Required for pagination
//         paginate: {
//             enable: true,
//             itemsPerPage: 1,
//             insertPagination: '.pagination-container-use-cases',
//         },
//         animation: {
//             enable: true,
//             duration: 0.3,
//             easing: 'ease',
//             effects: 'fade',
//         },
//     });
// }

// paginUseCases();

// var us = new FsLibrary('.blog-posts-list-us');
// // run the loadmore Library component on your instance
// all.loadmore({
//     button: '.load-more-button-us', // class of Webflow Pagination button
//     resetIx: true, // adds Webflow interactions to newly loaded items
//     loadAll: true, // loads ALL items in your collection load on the page. Required for pagination
//     paginate: {
//         enable: true,
//         itemsPerPage: 1,
//         insertPagination: '.pagination-container-us',
//     },
//     animation: {
//         enable: true,
//         duration: 0.3,
//         easing: 'ease',
//         effects: 'fade',
//     },
// });

// ------------------------

window.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.js-open-popup');

    if (btns.length) {
        for (const btn of btns) {
            btn.addEventListener('click', onGalleryItemsClick);
        }
    }
});

function onGalleryItemsClick(e) {
    const parent = e.target.parentNode.parentNode;
    const largeImageUrl = parent.querySelector('js-popup-img').src;

    const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" width="800" height="600">
`);

    instance.show(() => {
        document.querySelector('body').classList.add('over-hidden');
    });

    document.addEventListener('click', () => {
        document.querySelector('body').classList.remove('over-hidden');
    });

    document.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            instance.close(largeImageUrl);
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const fisrtName = document.querySelector(
            '#firstname-fa51bfd4-2ff4-416c-9af7-9ace8c9629ed'
        );
        const lastName = document.querySelector(
            '#lastname-fa51bfd4-2ff4-416c-9af7-9ace8c9629ed'
        );
        const email = document.querySelector(
            '#email-fa51bfd4-2ff4-416c-9af7-9ace8c9629ed'
        );

        if (fisrtName && lastName && email) {
            fisrtName.placeholder = 'First Name';
            lastName.placeholder = 'Last Name';
            email.placeholder = 'Email*';
        }
    }, 1000);
});

// const closeBtns = document.querySelectorAll('.js-close-video');
// const video = document.querySelector('.js-video iframe');

// if (video) {
//     let iframeSrc = video.src;
//     video.src = iframeSrc;
// }

// $('.js-close-video').click(function () {
//     console.log('click');
//     if (video) {
//         let iframeSrc = video.src;
//         video.src = iframeSrc;
//     }
// });

// // $('.js-video iframe')[0].contentWindow.postMessage(
// //     '{"event":"command","func":"' + 'stopVideo' + '","args":""}',
// //     '*'
// // );

var a = 0;
$(window).scroll(function () {
    var oTop = $('.counter-wrap').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('akhi');
            $({
                countNum: $this.text(),
            }).animate(
                {
                    countNum: countTo,
                },

                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    },
                }
            );
        });
        a = 1;
    }
});

// ------------------------------------
// var email = document.querySelector('input[type="email"]');
// const messageWrap = document.querySelector('.form-field-wrap');

// email.addEventListener(
//     'input',
//     function () {
//         // Note: if (this.checkValidity()) won't work
//         // as setCustomValidity('with a message') will set
//         // the field as invalid.

//         if (this.value.trim() === '') {
//             messageWrap.classList.add('after-open');
//         } else {
//             messageWrap.classList.remove('after-open');
//         }
//     },
//     false
// );

const validEmail = email => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = () => {
    const messageWrap = document.querySelector('.form-field-wrap.email');
    const email = $('.form-field-wrap.email input[type="email"]').val();

    if (validEmail(email)) {
        if (messageWrap) {
            messageWrap.classList.remove('after-open');
        }
    } else {
        if (messageWrap) {
            messageWrap.classList.add('after-open');
        }
    }
    return false;
};

$('.form-field-wrap.email input[type="email"]').on('input', validate);

// ----------------------------


    const lenis = new Lenis({
        lerp: 0.05,
        wheelMultiplier: 1,
        infinite: false,
        gestureOrientation: 'vertical',
        normalizeWheel: false,
        smoothTouch: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


