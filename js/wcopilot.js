document.addEventListener('DOMContentLoaded', () => {
    let rangeValues = [
        {
            orders: '0hrs.',
            value: '0hrs',
        },
        {
            orders: '5hrs.',
            value: '5hrs',
        },
        {
            orders: '10hrs.',
            value: '10hrs',
        },
        {
            orders: '15hrs.',
            value: '15hrs',
        },
        {
            orders: '20hrs.',
            value: '20hrs',
        },
        {
            orders: '25hrs.',
            value: '25hrs',
        },
        {
            orders: '30hrs.',
            value: '30hrs',
        },
        {
            orders: '35hrs.',
            value: '35hrs',
        },
        {
            orders: '40hrs.',
            value: '40hrs',
        },
        {
            orders: '45hrs.',
            value: '45hrs',
        },
        {
            orders: '50hrs.',
            value: '50hrs',
        },
        {
            orders: '55hrs.',
            value: '55hrs',
        },
        {
            orders: '60hrs.',
            value: '60hrs',
        },
        {
            orders: '65hrs.',
            value: '65hrs',
        },
        {
            orders: '70hrs.',
            value: '70hrs',
        },
        {
            orders: '75hrs.',
            value: '75hrs',
        },
        {
            orders: '80hrs.',
            value: '80hrs',
        },
        {
            orders: '85hrs.',
            value: '85hrs',
        },
        {
            orders: '90hrs.',
            value: '90hrs',
        },
        {
            orders: '95hrs.',
            value: '95hrs',
        },
        {
            orders: '100hrs.',
            value: '100hrs',
        },
    ];

    $('input[type="range"]').rangeslider({
        polyfill: false,
        onInit: function (position, value) {
            let $handle = this.$range.find('.rangeslider__oders');
            $handle.text(rangeValues[this.value].orders);

            $('[data-package]').css('display', 'none');
        },
        onSlide: function (position, value) {
            let $handle = this.$range.find('.rangeslider__oders');
            $handle.text(rangeValues[this.value].orders);

            let val = $('input[type="range"]').val();

            let packageSelector = `[data-package="${
                rangeValues[this.value].value
            }"]`;

            if (val <= 2) {
                this.$element.val(3).change();
                return;
            }

            $('[data-package]').css('display', 'none');
            $(packageSelector).css('display', 'flex');

            if (val < 5) {
                $('.rangeslider__point').css('background-color', '#eef0f5');
                $('.rangeslider__point:nth-child(1)').css(
                    'background-color',
                    '#f69c20'
                );
            } else if (val >= 5 && val < 10) {
                $('.rangeslider__point').css('background-color', '#eef0f5');
                $('.rangeslider__point:nth-child(1)').css(
                    'background-color',
                    '#f69c20'
                );
                $('.rangeslider__point:nth-child(2)').css(
                    'background-color',
                    '#f69c20'
                );
            } else if (val >= 10 && val < 15) {
                $('.rangeslider__point').css('background-color', '#eef0f5');
                $('.rangeslider__point:nth-child(1)').css(
                    'background-color',
                    '#f69c20'
                );
                $('.rangeslider__point:nth-child(2)').css(
                    'background-color',
                    '#f69c20'
                );
                $('.rangeslider__point:nth-child(3)').css(
                    'background-color',
                    '#f69c20'
                );
            } else if (val >= 15) {
                $('.rangeslider__point').css('background-color', '#eef0f5');
                $('.rangeslider__point:nth-child(1)').css(
                    'background-color',
                    '#f69c20'
                );
                $('.rangeslider__point:nth-child(2)').css(
                    'background-color',
                    '#f69c20'
                );
                $('.rangeslider__point:nth-child(3)').css(
                    'background-color',
                    '#f69c20'
                );
                $('.rangeslider__point:nth-child(4)').css(
                    'background-color',
                    '#f69c20'
                );
            }
        },
    });

    $('input[type="range"]').val(3).change();

    let rangePointsCount = 5;
    let rangeParts = rangePointsCount - 1;

    for (let i = 0; i < rangePointsCount; i++) {
        $('.rangeslider-points-wrapper').append(
            `<div class="rangeslider__point" style="left:${
                (100 / rangeParts) * i
            }%"></div>`
        );
    }

    $('.rangeslider__handle').append(
        `<div class="rangeslider__oders"><span>15hrs.</span> </div>`
    );
});
