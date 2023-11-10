console.log('PLANOLY');

const dropBtn = document.querySelector('.category-drop-down-btn');

const allCat = document.querySelector('[data-drop-cat="all"]');
if (allCat) {
    allCat.classList.add('w--current');
}

// ------------------------------

// let lastLoginTime = localStorage.getItem('lastLoginTime');
// const popup = document.querySelector('.pop-up-modal');

// const time = 1 * 60 * 1000;

// // 1 hours = 1 * 60 * 60 * 1000;
// // 24 hours = 24 * 60 * 60 * 1000;
// // 1 min = 1 * 60 * 1000;
// // 5 min = 5 * 60 * 1000;

// if (popup) {
//     if (!lastLoginTime) {
//         let currentTime = new Date().getTime();
//         console.log(currentTime);
//         console.log(currentTime - lastLoginTime);
//         console.log(24 * 60 * 60 * 1000);
//         console.log(24 * 60);

//         if (currentTime - lastLoginTime >= time) {
//             popup.style.cssText = 'display: flex;';
//             onLogin();
//         }
//     } else {
//         let currentTime = new Date().getTime();

//         if (currentTime - lastLoginTime >= time) {
//             popup.style.cssText = 'display: flex;';
//             onLogin();
//         }
//     }
// }

// function onLogin() {
//     localStorage.setItem('lastLoginTime', new Date().getTime());
// }

// Popup display settings
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        openPopup();
    }, 5000);

    function openPopup() {
        let lastLoginTime = localStorage.getItem('lastLoginTime');
        const popup = document.querySelector('.pop-up-modal');

        const time = 7 * 24 * 60 * 60 * 1000;

        // 7 deys = 7 * 24 * 60 * 60 * 1000;
        // 1 dey = 1 * 24 * 60 * 60 * 1000;
        // 1 hour = 1 * 60 * 60 * 1000;
        // 24 hours = 24 * 60 * 60 * 1000;
        // 1 min = 1 * 60 * 1000;
        // 5 min = 5 * 60 * 1000;

        if (popup) {
            let currentTime = new Date().getTime();
            console.log(currentTime);
            console.log(currentTime - lastLoginTime);
            console.log(24 * 60 * 60 * 1000);
            console.log(24 * 60);

            if (currentTime - lastLoginTime >= time) {
                // popup.style.cssText = 'display: flex;';
                popup.style.cssText = 'background-color: red;';
                onLogin();
            }
        }
    }

    function onLogin() {
        localStorage.setItem('lastLoginTime', new Date().getTime());
    }
});

function toggleContent() {
    if ($('.pl-footer-dropdown-title-wrap').length) {
        $('.pl-footer-dropdown-title-wrap').on('click', function () {
            $('.pl-footer-dropdown-title-wrap')
                .not(this)
                .removeClass('active')
                .next('.pl-footer-dropdown-list')
                .css('display', 'none');
            $(this).toggleClass('active');
        });
    }
}

toggleContent();
