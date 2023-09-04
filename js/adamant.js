var monkeyList = new List('test-list', {
    valueNames: ['name'],
    page: 3,
    pagination: true,
});

window.addEventListener('resize', () => {
    // Використання функцій для отримання висоти сторінки
    var pageHeightWithBrowserNav = getPageHeightWithBrowserNavigation();
    var pageHeightWithoutBrowserNav = getPageHeightWithoutBrowserNavigation();

    // Виведення отриманих значень в консоль (можна використовувати для подальших дій)
    alert(
        'Висота сторінки з видимою навігацією браузера: ' +
            pageHeightWithBrowserNav +
            'px'
    );
    alert(
        'Висота сторінки без видимої навігації браузера: ' +
            pageHeightWithoutBrowserNav +
            'px'
    );
});

// Отримання висоти сторінки з видимою навігацією браузера
function getPageHeightWithBrowserNavigation() {
    return window.innerHeight;
}

// Отримання висоти сторінки без видимої навігації браузера
function getPageHeightWithoutBrowserNavigation() {
    return window.screen.height;
}
