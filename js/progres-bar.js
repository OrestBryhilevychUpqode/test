const icons = document.querySelectorAll('.js-icon-dot');

gsap.registerPlugin(MotionPathPlugin);

gsap.to('#active-dot', {
    duration: 1,
    ease: 'power1.inOut',
    motionPath: {
        path: '#path-test',
        align: '#path-test',
        alignOrigin: [0.5, 0.5],
        offsetY: 10,
        start: 0.256,
        end: 0.256,
    },
});

function gsapAnimation(start, stop) {
    if (window.innerWidth > 1024) {
        gsap.to('#active-dot', {
            duration: 1,
            ease: 'power1.inOut',
            motionPath: {
                path: '#path-test',
                align: '#path-test',
                offsetY: 10,
                alignOrigin: [0.5, 0.5],
                start: start,
                end: stop,
            },
        });
    } else if (window.innerWidth <= 1024) {
        gsap.to('#active-dot', {
            duration: 1,
            ease: 'power1.inOut',
            motionPath: {
                path: '#path-test',
                align: '#path-test',
                offsetY: 10,
                alignOrigin: [0.5, 1],
                start: start,
                end: stop,
            },
        });
    }
}
function iconsRemoveActive(array) {
    newArray = [...array];

    newArray.map(item => {
        item.classList.remove('active');
    });
}

function iconsUpdate(array, current) {
    newArray = [...array];

    newArray.map(item => {
        item.classList.remove('active');

        if (item.dataset.id === current.toString()) {
            item.classList.add('active');
        }
    });
}

// -------------
const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

swiper.on('slideChange', function (e) {
    const startIndex = e.previousIndex;
    const stopIndex = e.activeIndex;

    iconsRemoveActive(icons);

    setTimeout(() => {
        if (startIndex - stopIndex < 0) {
            const start = document.querySelector(
                `.swiper-journey .swiper-slide-prev`
            ).dataset.pos;
            const stop = document.querySelector(
                `.swiper-journey .swiper-slide-active`
            ).dataset.pos;

            gsapAnimation(start, stop);
        }

        if (startIndex - stopIndex > 0) {
            const start = document.querySelector(
                `.swiper-journey .swiper-slide-next`
            ).dataset.pos;
            const stop = document.querySelector(
                `.swiper-journey .swiper-slide-active`
            ).dataset.pos;

            gsapAnimation(start, stop);
        }
    }, 10);

    setTimeout(() => {
        iconsUpdate(icons, e.realIndex);
    }, 1010);
});
