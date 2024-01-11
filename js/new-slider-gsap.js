// const numberItems = 6 + 1;

// const containerH = $('.js-feature-list').height();

// // console.log(containerH);
// $('.js-feature-item').css({ position: apsolut,});
// // featureItems.slideUp();
// // featureItems.first().slideDown();

// $('.js-feature-list').css('height', `${containerH}px`);

// $('[data-slide-id]').click(function (e) {
//     const id = e.currentTarget.dataset.slideId;
//     const selector = `#${id}`;
//     console.log(selector);
//     $('html, body').animate(
//         {
//             scrollTop: $(selector).parent().offset().top - 160,
//         },
//         500
//     );
// });

// document.addEventListener('scroll', event => {
//     handleScroll();
// });

// function handleScroll() {
//     const containerTop = $('.stiky-tabs').offset();
//     const stickyElTop = $('.stiky-tabs-wrap').offset();

//     const difference = stickyElTop.top - containerTop.top;

//     if (difference > 0 && difference < containerH / numberItems) {
//         featureItems.each(function (index) {
//             if (index + 1 === 1) {
//                 $(this).slideDown();
//             } else {
//                 $(this).slideUp();
//             }
//         });
//     }

//     if (
//         difference > containerH / numberItems &&
//         difference < 2 * (containerH / numberItems)
//     ) {
//         featureItems.each(function (index) {
//             if (index + 1 === 2) {
//                 $(this).slideDown();
//             } else {
//                 $(this).slideUp();
//             }
//         });
//     }

//     if (
//         difference > 2 * (containerH / numberItems) &&
//         difference < 3 * (containerH / numberItems)
//     ) {
//         featureItems.each(function (index) {
//             if (index + 1 === 3) {
//                 $(this).slideDown();
//             } else {
//                 $(this).slideUp();
//             }
//         });
//     }

//     if (
//         difference > 3 * (containerH / numberItems) &&
//         difference < 4 * (containerH / numberItems)
//     ) {
//         featureItems.each(function (index) {
//             if (index + 1 === 4) {
//                 $(this).slideDown();
//             } else {
//                 $(this).slideUp();
//             }
//         });
//     }

//     if (
//         difference > 4 * (containerH / numberItems) &&
//         difference < 5 * (containerH / numberItems)
//     ) {
//         featureItems.each(function (index) {
//             if (index + 1 === 5) {
//                 $(this).slideDown();
//             } else {
//                 $(this).slideUp();
//             }
//         });
//     }

//     if (
//         difference > 5 * (containerH / numberItems) &&
//         difference < 6 * (containerH / numberItems)
//     ) {
//         featureItems.each(function (index) {
//             if (index + 1 === 6) {
//                 $(this).slideDown();
//             } else {
//                 $(this).slideUp();
//             }
//         });
//     }
// }

// ------------------------------------

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, MotionPathPlugin);

let containerH = 0;

$('.js-feature-item').css('position', 'absolute');

const items = document.querySelectorAll('.js-feature-item');
for (const item of items) {
    if (containerH < item.offsetHeight) {
        containerH = item.offsetHeight;
    }
}

$('.js-feature-list').css('height', `${containerH}px`);

let timeln = gsap.timeline({
    scrollTrigger: {
        trigger: '.js-feature-top',
        pin: true,
        pinSpacing: true,
        start: 'top top',
        scrub: 1,
    },
});

timeln.to('.first.js-feature-item', {});
timeln.call(function () {
    $('[data-slide-id]').removeClass('active');
    $('[data-slide-id="slide-1"]').addClass('active');

    $('[data-content-id]').removeClass('isOpen');
    $('[data-content-id="1"]').addClass('isOpen');
});

timeln.to('.second.js-feature-item', {});
timeln.call(function () {
    $('[data-slide-id]').removeClass('active');
    $('[data-slide-id="slide-2"]').addClass('active');

    $('[data-content-id]').removeClass('isOpen');
    $('[data-content-id="2"]').addClass('isOpen');
});

timeln.to('.third.js-feature-item', {});
timeln.call(function () {
    $('[data-slide-id]').removeClass('active');
    $('[data-slide-id="slide-3"]').addClass('active');

    $('[data-content-id]').removeClass('isOpen');
    $('[data-content-id="3"]').addClass('isOpen');
});

timeln.to('.fourth.js-feature-item', {});
timeln.call(function () {
    $('[data-slide-id]').removeClass('active');
    $('[data-slide-id="slide-4"]').addClass('active');

    $('[data-content-id]').removeClass('isOpen');
    $('[data-content-id="4"]').addClass('isOpen');
});

timeln.to('.fifth.js-feature-item', {});
timeln.call(function () {
    $('[data-slide-id]').removeClass('active');
    $('[data-slide-id="slide-5"]').addClass('active');

    $('[data-content-id]').removeClass('isOpen');
    $('[data-content-id="5"]').addClass('isOpen');
});

timeln.to('.sixth.js-feature-item', {});
timeln.call(function () {
    $('[data-slide-id]').removeClass('active');
    $('[data-slide-id="slide-6"]').addClass('active');

    $('[data-content-id]').removeClass('isOpen');
    $('[data-content-id="6"]').addClass('isOpen');
});

timeln.to('.sixth.js-feature-item', {});

document.querySelectorAll('.hf-tab-wrap').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElemSel = `#${e.currentTarget.dataset.slideId}`;

        $('[data-slide-id]').removeClass('active');
        $(this).addClass('active');

        $('[data-content-id]').removeClass('isOpen');
        $(targetElemSel).addClass('isOpen');
    });
});
