console.log('object');

const refs = {
    bord: document.querySelector('.bord'),
    bigIce: document.querySelector('.big-ice'),
    smallIce: document.querySelector('.small-ice'),
    penguin: document.querySelector('.penguin'),
};

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        refs.bigIce.classList.add('end-position');
    }, 500);

    setTimeout(() => {
        refs.smallIce.classList.add('end-position');
    }, 1000);

    setTimeout(() => {
        refs.penguin.classList.add('end-position');
    }, 1500);

    setTimeout(() => {
        refs.bord.classList.add('end-position');
    }, 2000);
});

// const container = document.querySelector('.penguin');

// container.addEventListener('mousemove', e => {
//     const xPos = (window.innerWidth / 2 - e.pageX) / 10;
//     const yPos = (window.innerHeight / 2 - e.pageY) / 10;

//     refs.penguin.style.transform = `rotateX(${yPos}deg) rotateY(${xPos}deg)`;
// });

// container.addEventListener('mouseenter', e => {
//     refs.penguin.style.transition = 'none';
// });

// container.addEventListener('mouseleave', e => {
//     refs.penguin.style.transition = 'transform 0.3s';

//     refs.penguin.style.transform = 'none';
// });
