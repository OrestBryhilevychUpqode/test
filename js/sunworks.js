console.log('Sunwork');

const refs = {
    sungrow1: document.querySelector('.js-sungrow-1'),
    sungrow2: document.querySelector('.js-sungrow-2'),
    sungrow3: document.querySelector('.js-sungrow-3'),
    sungrow_line: document.querySelector('.js-sungrow-line'),
    sungrow_circle: document.querySelector('.js-sungrow-circle'),
    sungrow_circle_wrap: document.querySelector('.js-sungrow-circle-wrap'),
};

refs.sungrow1.addEventListener('mouseover', sungrowHover);
refs.sungrow1.addEventListener('mouseout', sungrowUnHover);
refs.sungrow2.addEventListener('mouseover', sungrowHover);
refs.sungrow2.addEventListener('mouseout', sungrowUnHover);
refs.sungrow3.addEventListener('mouseover', sungrowHover);
refs.sungrow3.addEventListener('mouseout', sungrowUnHover);

refs.sungrow1.addEventListener('click', sungrowOpenPopup);
refs.sungrow2.addEventListener('click', sungrowOpenPopup);
refs.sungrow3.addEventListener('click', sungrowOpenPopup);

function sungrowHover() {
    refs.sungrow3.style.stroke = 'red';
    refs.sungrow_line.style.stroke = 'red';
    refs.sungrow_circle.style.fill = 'red';
    refs.sungrow_circle_wrap.style.stroke = 'red';
}

function sungrowUnHover() {
    refs.sungrow3.style.stroke = '#20733C';
    refs.sungrow_line.style.stroke = '#20733C';
    refs.sungrow_circle.style.fill = '#20733C';
    refs.sungrow_circle_wrap.style.stroke = '#20733C';
}

function sungrowOpenPopup() {
    sungrowHover();
    const popup = document.querySelector('.sungrow-popup-wrap');
    popup.classList.add('isOpen');

    popup.addEventListener('click', e => {
        const div = document.querySelector('.sungrow-popup');
        const withinBoundaries = e.composedPath().includes(div);
        if (!withinBoundaries) {
            popup.classList.remove('isOpen');
            sungrowUnHover();
        }
    });
}

const a = document.querySelector('.test2');

const string = `${a.innerHTML}`;
console.log(string.split('').length);
console.log(string.split(''));

const b = document.querySelector('.test');

const string2 = `${b.innerHTML}`;
console.log(string2.split('').length);

