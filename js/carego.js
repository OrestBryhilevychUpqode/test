console.log('carego');

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);

// --------------------
// const paragraph = document.querySelector('.reveal-type');
// const chars = paragraph.textContent.split(' ');
// const chars2 = chars.filter(element => element !== '');
// paragraph.textContent = '';

// for (const char of chars2) {
//     const charSpan = document.createElement('span');
//     charSpan.textContent = char;
//     paragraph.appendChild(charSpan);
// }

// const spans = paragraph.querySelectorAll('.reveal-type > span');

// spans.forEach((word, i) => {
//     const text = new SplitType(word, { types: 'chars' });

//     gsap.fromTo(
//         text.chars,
//         {
//             opacity: 0.2,
//         },
//         {
//             opacity: 1,
//             duration: 1,
//             // stagger: 0.02,
//             scrollTrigger: {
//                 trigger: word,
//                 start: 'top 70%',
//                 end: 'top 10%',
//                 scrub: true,
//                 // markers: false,
//                 // toggleActions: 'play play reverse reverse',
//             },
//         }
//     );
// });

// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.reveal-type',
//         start: 'top center',
//         end: 'bottom center',
//         scrub: 0.5,
//         markers: true,
//     },
// });

// tl.to(spans, { autoAlpha: 1, stagger: 0.1 });

// ---------------------

// const splitTypes = document.querySelectorAll('.reveal-type');

// splitTypes.forEach((word, i) => {
//     const bg = word.dataset.bgColor;
//     const fg = word.dataset.fgColor;

//     const text = new SplitType(word, { types: 'words' });
// });
// const paragraph = new SplitType('.reveal-type', { types: 'word' });

// const splitWords = document.querySelectorAll('.reveal-type .word');
// console.log(splitWords);

// splitWords.forEach((char, i) => {
//     console.log(char);
//     const text = new splitType(char, { types: 'chars' });
//     console.log(text);

//     gsap.fromTo(
//         text.chars,
//         {
//             opacity: 0.2,
//         },
//         {
//             opacity: 1,
//             duration: 1,
//             stagger: 0.02,
//             scrollTrigger: {
//                 trigger: char,
//                 start: 'top 70%',
//                 end: 'top 10%',
//                 scrub: true,
//                 // markers: false,
//                 toggleActions: 'play play reverse reverse',
//             },
//         }
//     );
// });
// ----------------------

// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Main navigation */
let panelsSection = document.querySelector('#panels'),
    panelsContainer = document.querySelector('#panels-container'),
    tween;
document.querySelectorAll('.anchor').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        console.log('click');
        e.preventDefault();
        let targetElem = document.querySelector(e.target.getAttribute('href')),
            y = targetElem;
        if (
            targetElem &&
            panelsContainer.isSameNode(targetElem.parentElement)
        ) {
            let totalScroll =
                    tween.scrollTrigger.end - tween.scrollTrigger.start,
                totalMovement = cont.scrollWidth - innerWidth;
            y = Math.round(
                tween.scrollTrigger.start +
                    (targetElem.offsetLeft / totalMovement) * totalScroll
            );
        }
        gsap.to(window, {
            scrollTo: {
                y: y,
                autoKill: false,
            },
            duration: 1,
        });
    });
});

const cont = document.querySelector('#feature-container');
const panels = gsap.utils.toArray('#feature-container .feature-slide');

/* Panels */
// const cont = document.querySelector('#panels-container');
// const panels = gsap.utils.toArray('#panels-container .panel');

tween = gsap.to(panels, {
    x: () => -1 * (cont.scrollWidth - innerWidth),
    ease: 'none',
    scrollTrigger: {
        trigger: '#panels-container',
        pin: true,
        start: 'top top',
        scrub: 1,
        // end: () => '+=' + (cont.scrollWidth - innerWidth),
        end: () =>
            '+=' + document.querySelector('#panels-container').offsetWidth,
        onUpdate: self => {
            const slideIndex = Math.round(self.progress * (panels.length - 1));
            const slideId = panels[slideIndex].id;
            // console.log(panels[slideIndex]);

            // updateActiveNav(slideId);
        },
    },
});

function updateActiveNav(slideId) {
    $('[data-slide-id]').removeClass('active');
    $(`[data-slide-id="${slideId}"]`).addClass('active');
}

/* Main navigation */
// const panelsSection = document.querySelector('.js-feature-top');

// document.querySelectorAll('.hf-tab-wrap').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         console.log(e.currentTarget.dataset.slideId);

//         const targetElem = document.querySelector(
//             `#${e.currentTarget.dataset.slideId}`
//         );

//         const containerOffset =
//             panelsSection.parentElement.offsetTop + targetElem.offsetLeft - 10; // 10 being the margin - probably better to get it like it was done above

//         console.log(containerOffset);

//         gsap.to(window, {
//             scrollTo: {
//                 y: containerOffset,
//                 autoKill: false,
//             },
//             duration: 1,
//         });
//     });
// });

// ----------------
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let split = new SplitType('.split-lines', {
    types: 'lines, words',
});
let masks;

masks = [];

split.lines.forEach(target => {
    let mask = document.createElement('span');
    mask.className = 'mask';
    target.append(mask);
    masks.push(mask);
    gsap.to(mask, {
        scaleX: 0,
        transformOrigin: 'right center',
        ease: 'none',
        scrollTrigger: {
            trigger: target,
            scrub: true,
            start: 'top center',
            end: 'bottom center',
        },
    });
});
