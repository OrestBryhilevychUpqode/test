const newTextWrap = document.querySelector('.new-map');
const text = document.querySelector('.old-map').textContent.split(' ');

const newText = [];

text.map(item => {
    if (item !== '') {
        const newItem = `<url><loc>${item}</loc></url>`;

        newText.push(newItem);
    }
});

newTextWrap.insertAdjacentHTML('afterbegin', newText.join(''));

// console.log(newText.join(''));

// const newNewarray = [];
// const newNew = newText.join('').split('');

// newNew.map(item => {
//     if (item !== ' ') {
//         newNewarray.push(item);
//     }
// });

// console.log(newNewarray);

// console.log(newNewarray.join(''));
