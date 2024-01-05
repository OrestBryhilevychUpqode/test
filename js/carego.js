console.log('carego');

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char, i) => {
    const bg = char.dataset.bgColor;
    const fg = char.dataset.fgColor;

    const text = new SplitType(char, { types: 'words' });

    gsap.fromTo(
        text.words,
        {
            opacity: 0.4,
        },
        {
            opacity: 1,
            duration: 0.5,
            stagger: 0.02,
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
        }
    );
});

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

// const cont = document.querySelector('#feature-container');
// const panels = gsap.utils.toArray('#feature-container .feature-slide');

/* Panels */
const cont = document.querySelector('#panels-container');
const panels = gsap.utils.toArray('#panels-container .panel');

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
