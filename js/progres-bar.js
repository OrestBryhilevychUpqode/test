gsap.registerPlugin(MotionPathPlugin);

gsap.to('#active-dot', {
    duration: 1,
    ease: 'power1.inOut',
    motionPath: {
        path: '#path-test',
        align: '#path-test',
        alignOrigin: [0.5, 0.5],
        offsetY: 10,
        start: 0.255,
        end: 0.255,
    },
});

// $('.js-btn').on('click', function () {
//     gsap.set('#active-dot', { xPercent: -100, yPercent: -0 });
//     gsap.to('#active-dot', {
//         duration: 1,
//         ease: 'power1.inOut',

//         motionPath: {
//             path: '#path-test',
//             align: 'self',
//             // alignOrigin: [0.5, 0.5],
//             start: 0.34,
//             end: 0.255,
//         },
//     });
// });

function gsapAnimation(start, stop) {
    gsap.to('#active-dot', {
        duration: 1,
        ease: 'power1.inOut',
        motionPath: {
            path: '#path-test',
            align: '#path-test',
            offsetY: 10,
            // autoRotate: true,
            alignOrigin: [0.5, 0.5],
            // autoRotate: true,
            start: start,
            end: stop,
        },
    });
}

// -------------
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

swiper.on('slideChange', function (e) {
    const startIndex = e.previousIndex;
    const stopIndex = e.activeIndex;
    setTimeout(() => {
        if (startIndex - stopIndex < 0) {
            const start = document.querySelector(
                `.swiper-journey .swiper-slide-prev`
            ).dataset.pos;
            const stop = document.querySelector(
                `.swiper-journey .swiper-slide-active`
            ).dataset.pos;
            console.log(start);
            console.log(stop);
            gsapAnimation(start, stop);
        }

        if (startIndex - stopIndex > 0) {
            const start = document.querySelector(
                `.swiper-journey .swiper-slide-next`
            ).dataset.pos;
            const stop = document.querySelector(
                `.swiper-journey .swiper-slide-active`
            ).dataset.pos;
            console.log(start);
            console.log(stop);
            gsapAnimation(start, stop);
        }
    }, 10);
});
