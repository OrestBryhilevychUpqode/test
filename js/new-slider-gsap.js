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

// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, MotionPathPlugin);
// ScrollTrigger.config({
//     autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load, resize',
// });

// let containerH = 0;
// let timeln;

// function initFeature() {
//     $('.js-feature-item').css('position', 'absolute');

//     const items = document.querySelectorAll('.js-feature-item');
//     for (const item of items) {
//         if (containerH < item.offsetHeight) {
//             containerH = item.offsetHeight;
//         }
//     }

//     $('.js-feature-list').css('height', `${containerH}px`);

//     timeln = gsap.timeline({
//         scrollTrigger: {
//             trigger: '.js-feature-top',
//             pin: true,
//             pinSpacing: true,
//             start: 'top top',
//             scrub: 1,
//         },
//     });

//     timeln.add('f1');
//     timeln.to('.first.js-feature-item', {});
//     timeln.call(function () {
//         $('[data-slide-id]').removeClass('active');
//         $('[data-slide-id="slide-1"]').addClass('active');

//         $('[data-content-id]').removeClass('isOpen');
//         $('[data-content-id="1"]').addClass('isOpen');
//     });

//     timeln.addPause();
//     timeln.add('f2');
//     timeln.to('.second.js-feature-item', {});
//     timeln.call(function () {
//         $('[data-slide-id]').removeClass('active');
//         $('[data-slide-id="slide-2"]').addClass('active');

//         $('[data-content-id]').removeClass('isOpen');
//         $('[data-content-id="2"]').addClass('isOpen');
//     });

//     timeln.addPause();
//     timeln.add('f3');
//     timeln.to('.third.js-feature-item', {});
//     timeln.call(function () {
//         $('[data-slide-id]').removeClass('active');
//         $('[data-slide-id="slide-3"]').addClass('active');

//         $('[data-content-id]').removeClass('isOpen');
//         $('[data-content-id="3"]').addClass('isOpen');
//     });

//     timeln.addPause();
//     timeln.add('f4');
//     timeln.to('.fourth.js-feature-item', {});
//     timeln.call(function () {
//         $('[data-slide-id]').removeClass('active');
//         $('[data-slide-id="slide-4"]').addClass('active');

//         $('[data-content-id]').removeClass('isOpen');
//         $('[data-content-id="4"]').addClass('isOpen');
//     });

//     timeln.addPause();
//     timeln.add('f5');
//     timeln.to('.fifth.js-feature-item', {});
//     timeln.call(function () {
//         $('[data-slide-id]').removeClass('active');
//         $('[data-slide-id="slide-5"]').addClass('active');

//         $('[data-content-id]').removeClass('isOpen');
//         $('[data-content-id="5"]').addClass('isOpen');
//     });

//     timeln.addPause();
//     timeln.add('f6');
//     timeln.to('.sixth.js-feature-item', {});
//     timeln.call(function () {
//         $('[data-slide-id]').removeClass('active');
//         $('[data-slide-id="slide-6"]').addClass('active');

//         $('[data-content-id]').removeClass('isOpen');
//         $('[data-content-id="6"]').addClass('isOpen');
//     });

//     timeln.to('.sixth.js-feature-item', {});
// }

// $(window).resize(function () {
//     console.log('resize');

//     // location.reload();
// });

// initFeature();

// document.querySelectorAll('.hf-tab-wrap').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetElemSel = `#${e.currentTarget.dataset.slideId}`;

//         $('[data-slide-id]').removeClass('active');
//         $(this).addClass('active');

//         $('[data-content-id]').removeClass('isOpen');
//         $(targetElemSel).addClass('isOpen');

//         getBodyScrollTop();
//     });
// });

// console.log(timeln.labels);

// ---------------------------

// class StickyNavigation {
//     constructor() {
//         this.currentId = null;
//         this.currentTab = null;
//         this.tabContainerHeight = 70;
//         this.lastScroll = 0;
//         let self = this;
//         $('.js-feature-tab-item').click(function () {
//             self.onTabClick(event, $(this));
//         });
//         $(window).scroll(() => {
//             this.onScroll();
//         });
//         $(window).resize(() => {
//             this.onResize();
//         });
//     }

//     onTabClick(event, element) {
//         event.preventDefault();
//         let scrollTop =
//             $(element.attr('data-slide-id')).offset().top -
//             this.tabContainerHeight +
//             1;
//         $('html, body').animate({ scrollTop: scrollTop }, 500);
//     }

//     onScroll() {
//         this.checkHeaderPosition();
//         this.findCurrentTabSelector();
//         this.lastScroll = $(window).scrollTop();
//     }

//     onResize() {
//         if (this.currentId) {
//             this.setSliderCss();
//         }
//     }

//     checkHeaderPosition() {
//         const headerHeight = 75;
//         if ($(window).scrollTop() > headerHeight) {
//             $('.spa-header').addClass('spa-header--scrolled');
//         } else {
//             $('.spa-header').removeClass('spa-header--scrolled');
//         }
//         let offset =
//             $('.js-feature-tabs').offset().top +
//             $('.js-feature-tabs').height() -
//             this.tabContainerHeight -
//             headerHeight;
//         if (
//             $(window).scrollTop() > this.lastScroll &&
//             $(window).scrollTop() > offset
//         ) {
//             $('.home-features-tabs-wrapper').removeClass(
//                 'sticky-nav-tabs-container--top-first'
//             );
//             $('.home-features-tabs-wrapper').addClass(
//                 'sticky-nav-tabs-container--top-second'
//             );
//         } else if (
//             $(window).scrollTop() < this.lastScroll &&
//             $(window).scrollTop() > offset
//         ) {
//             $('.home-features-tabs-wrapper').removeClass(
//                 'sticky-nav-tabs-container--top-second'
//             );
//             $('.home-features-tabs-wrapper').addClass(
//                 'sticky-nav-tabs-container--top-first'
//             );
//         } else {
//             $('.home-features-tabs-wrapper').removeClass(
//                 'sticky-nav-tabs-container--top-first'
//             );
//             $('.home-features-tabs-wrapper').removeClass(
//                 'sticky-nav-tabs-container--top-second'
//             );
//         }
//     }

//     findCurrentTabSelector(element) {
//         let newCurrentId;
//         let newCurrentTab;
//         let self = this;
//         $('.js-feature-tab-item').each(function () {
//             let id = $(this).attr('data-slide-id');
//             let offsetTop = $(id).offset().top - self.tabContainerHeight;
//             let offsetBottom =
//                 $(id).offset().top + $(id).height() - self.tabContainerHeight;
//             if (
//                 $(window).scrollTop() > offsetTop &&
//                 $(window).scrollTop() < offsetBottom
//             ) {
//                 newCurrentId = id;
//                 newCurrentTab = $(this);
//             }
//         });
//         if (this.currentId != newCurrentId || this.currentId === null) {
//             this.currentId = newCurrentId;
//             this.currentTab = newCurrentTab;
//             this.setSliderCss();
//         }
//     }

//     setSliderCss() {
//         $('.js-feature-tab-item').removeClass('active');
//         if (this.currentTab) {
//             this.currentTab.addClass('active');
//         }
//     }
// }

// new StickyNavigation();

// -----------------------

// const topSection = document.querySelector('.js-feature-top');
// const tabsWrapWrap = document.querySelectorAll('.home-features-tabs-wrapper');
// const tabsWrap = document.querySelectorAll('.js-feature-tabs');
// const tabs = document.querySelectorAll('.js-feature-tab-item');
// const pages = document.querySelectorAll('.js-feature-item');

// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         setTimeout(() => {
//             $('html, body').animate(
//                 {
//                     scrollTop: $(tab.dataset.slideId).offset().top + 0,
//                 },
//                 500
//             );
//         }, 500);
//     });
// });

// const observer = new IntersectionObserver(
//     (entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 pages.forEach(page => {
//                     page.classList.remove('isOpen');
//                 });
//                 entry.target.classList.add('isOpen');

//                 const index = Array.from(pages).indexOf(entry.target);
//                 tabs.forEach(tab => {
//                     tab.classList.remove('active');
//                 });
//                 tabs[index].classList.add('active');
//             }
//         });
//     },
//     {
//         threshold: 0.25,
//     }
// );

// pages.forEach(page => {
//     observer.observe(page);
// });

// // top observ
// // function displayEntry(entry) {
// //     if (entry.isIntersecting) {
// //         tabsWrapWrap[0].classList.add('isFixed');
// //     } else {
// //         tabsWrapWrap[0].classList.remove('isFixed');
// //     }
// // }

// // let callback = function (entries, observer) {
// //     entries.forEach(entry => {
// //         displayEntry(entry);
// //     });
// // };

// // let observer1 = new IntersectionObserver(callback, {
// //     rootMargin: '0px 0px 0px 0px',
// //     threshold: 0.1,
// // });

// // let target = topSection;

// // observer1.observe(target);
// // ('data-lenis-prevent-wheel');

// let lastScrollPos = 0;

// --------------------------------------------------------------------
let isFixed = false;
const scrolling = {
    enabled: true,
    events: 'scroll,wheel,touchmove,pointermove'.split(','),
    prevent: e => e.preventDefault(),
    disable() {
        $('html').css('overflow', 'hidden');
    },
    enable() {
        $('html').css('overflow', '');
    },
};
// $(window).scroll(function (e) {
//     scrollLIsener();
// });

function displayEntry(entry) {
    console.log(`Intersecting: ${entry.isIntersecting}`);
    scrolling.enable();
    isFixed = false;
    if (entry.isIntersecting) {
        scrolling.disable();
        isFixed = true;
    }
}

let callback = function (entries, observer) {
    entries.forEach(entry => {
        displayEntry(entry);
    });
};

let observer = new IntersectionObserver(callback, {
    rootMargin: ' 0px',
    threshold: 1.0,
});

let target = document.querySelector('.js-feature-top');

observer.observe(target);

// function scrollLIsener() {
//     var viewportOject =
//         $('.js-feature-top').offset().top - $(window).scrollTop();

//     if (viewportOject <= 10) {
//         isFixed = true;
//         scrolling.disable();
//     }
// }

$(window).on('touchstart', function (e) {
    var swipe = e.originalEvent.touches,
        start = swipe[0].pageY;

    $(this)
        .on('touchmove', function (e) {
            var contact = e.originalEvent.touches,
                end = contact[0].pageY,
                distance = end - start;

            if (distance < -15) {
                console.log('up');
            } // up
            if (distance > 15) {
                console.log('down');
            } // down
        })
        .one('touchend', function () {
            $(this).off('touchmove touchend');
        });
});

function detectMouseWheelDirection(e) {
    var delta = null,
        direction = false;
    if (!e) {
        // if the event is not provided, we get it from the window object
        e = window.event;
    }
    if (e.wheelDelta) {
        // will work in most cases
        delta = e.wheelDelta / 60;
    } else if (e.detail) {
        // fallback for Firefox
        delta = -e.detail / 2;
    }
    if (delta !== null) {
        direction = delta > 0 ? 'up' : 'down';
    }

    return direction;
}
function handleMouseWheelDirection(direction) {
    console.log(direction);
    if (direction == 'down') {
        // do something, like show the next page
        toNextSlide();
    } else if (direction == 'up') {
        // do something, like show the previous page
        toPrevSlide();
    } else {
        // this means the direction of the mouse wheel could not be determined
    }
}
document.onmousewheel = function (e) {
    handleMouseWheelDirection(detectMouseWheelDirection(e));
};
if (window.addEventListener) {
    document.addEventListener('DOMMouseScroll', function (e) {
        handleMouseWheelDirection(detectMouseWheelDirection(e));
    });
}

// start add height
let containerH = 0;

$('.js-feature-item').css('position', 'absolute');

const items = document.querySelectorAll('.js-feature-item');
for (const item of items) {
    if (containerH < item.offsetHeight) {
        containerH = item.offsetHeight;
    }
}

$('.js-feature-list').css('height', `${containerH}px`);

let activeSlide = $('.js-feature-item.isOpen');
let nextSlide = $('.js-feature-item.isOpen').next();
let prevSlide = $('.js-feature-item.isOpen').prev();

function toNextSlide() {
    if (isFixed) {
        if (nextSlide.length === 0) {
            scrolling.enable();
            isFixed = false;

            return;
        }

        $('.js-feature-item').removeClass('isOpen');
        nextSlide.addClass('isOpen');

        activeSlide = $('.js-feature-item.isOpen');
        nextSlide = $('.js-feature-item.isOpen').next();
        prevSlide = $('.js-feature-item.isOpen').prev();
    }
}

function toPrevSlide() {
    if (isFixed) {
        if (prevSlide.length === 0) {
            scrolling.enable();
            isFixed = false;
            return;
        }

        $('.js-feature-item').removeClass('isOpen');
        prevSlide.addClass('isOpen');

        activeSlide = $('.js-feature-item.isOpen');
        nextSlide = $('.js-feature-item.isOpen').next();
        prevSlide = $('.js-feature-item.isOpen').prev();
    }
}

$('.js-feature-tab-item').on('click', function (e) {
    const id = $(this).attr('data-slide-id');

    $('html, body').animate(
        {
            scrollTop: $('id').offset().top,
        },
        500
    );
});
