initMultiStepForm();

function initMultiStepForm() {
    let finishTotalHrs = 0;

    const slidePage = document.querySelector('.slide-page');
    const submitBtn = document.querySelector('.submit');
    const calculateBtn = document.querySelector('.js-calculate-btn');
    const pages = document.querySelectorAll('.page');
    const nextButtons = document.querySelectorAll('.next');
    const prevButtons = document.querySelectorAll('.prev');
    const stepsNumber = pages.length;

    document.documentElement.style.setProperty('--stepNumber', stepsNumber);

    let current = 1;

    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener('click', function (event) {
            event.preventDefault();

            inputsValid = validateInputs(this);
            // inputsValid = true;

            if (inputsValid) {
                slidePage.style.marginLeft = `-${
                    (100 / stepsNumber) * current
                }%`;
                current += 1;
            }
        });
    }

    for (let i = 0; i < prevButtons.length; i++) {
        prevButtons[i].addEventListener('click', function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = `-${
                (100 / stepsNumber) * (current - 2)
            }%`;
            current -= 1;
        });
    }

    calculateBtn.addEventListener('click', calculate);

    submitBtn.addEventListener('click', function () {
        current += 1;

        $('.js-calc-result [data-package]').remove();
        $(`[data-package="${finishTotalHrs - 5}hrs"]`)
            .clone()
            .appendTo('.js-calc-result');
        $(`[data-package="${finishTotalHrs}hrs"]`)
            .clone()
            .appendTo('.js-calc-result');
        $(`[data-package="${finishTotalHrs + 5}hrs"]`)
            .clone()
            .appendTo('.js-calc-result');

        $('.js-calc-result [data-package]').css('display', 'flex');

        $('html, body').animate(
            {
                scrollTop: $('.js-calc-result').offset().top - 120,
            },
            500
        );
    });

    // subit form

    // add function
    function calculate() {
        let totalHrs = 0;

        const valType = document.querySelector(
            'input[name="type"]:checked'
        ).value;

        const valInnerPages = document.querySelector(
            'input[name="inner-pages"]'
        ).value;

        const valBlog = document.querySelector(
            'input[name="blog"]:checked'
        ).value;

        const valMigrate = document.querySelector(
            'input[name="migrate"]:checked'
        ).value;

        const valIntegration = document.querySelector(
            'input[name="integration"]:checked'
        ).value;

        // additional  functionality: online-bookings

        const valEventsIntegrated =
            document.querySelector('#events-integrated').checked;
        const valCareersIntegrated = document.querySelector(
            '#careers-integrated'
        ).checked;
        const valNewsletterIntegration = document.querySelector(
            '#newsletter-integration'
        ).checked;
        const valLiveChatIntegration = document.querySelector(
            '#livechat-integration'
        ).checked;
        const valOnlineBookings =
            document.querySelector('#online-bookings').checked;
        const valEcommerce = document.querySelector('#ecommerce').checked;
        const valGoogleMap = document.querySelector('#google-map').checked;
        const valAccessiBe = document.querySelector('#accessibe').checked;
        const valWebflowSearch =
            document.querySelector('#webflow-search').checked;
        const valMultiLanguageManually = document.querySelector(
            '#multi-language-manually'
        ).checked;
        const valMultiLanguageWeglot = document.querySelector(
            '#multi-language-weglot'
        ).checked;
        const valMembershipPortal =
            document.querySelector('#membership-portal').checked;
        const valLogo = document.querySelector('#logo').checked;

        // calc
        if (valType === 'custom') {
            totalHrs += 20;
        }

        totalHrs += valInnerPages * 3;

        if (valBlog === 'yes') {
            totalHrs += 5;
        }
        if (valMigrate === 'yes') {
            totalHrs += 3;
        }
        if (valIntegration === 'yes') {
            totalHrs += 5;
        }
        if (valEventsIntegrated) {
            totalHrs += 10;
        }
        if (valCareersIntegrated) {
            totalHrs += 5;
        }
        if (valNewsletterIntegration) {
            totalHrs += 5;
        }
        if (valLiveChatIntegration) {
            totalHrs += 0.5;
        }
        if (valOnlineBookings) {
            totalHrs += 25;
        }
        if (valEcommerce) {
            totalHrs += 5;
        }
        if (valGoogleMap) {
            totalHrs += 4;
        }
        if (valAccessiBe) {
            totalHrs += 1;
        }
        if (valWebflowSearch) {
            totalHrs += 1;
        }
        if (valMultiLanguageManually) {
            totalHrs += 0.5;
        }
        if (valMultiLanguageWeglot) {
            totalHrs += 2.5;
        }
        if (valMembershipPortal) {
            totalHrs += 12;
        }
        if (valLogo) {
            totalHrs += 10;
        }

        const ceilTotalHrs = Math.ceil(totalHrs / 5) * 5;

        if (ceilTotalHrs < 20) {
            finishTotalHrs = 20;
        } else if (ceilTotalHrs > 95) {
            finishTotalHrs = 95;
        } else {
            finishTotalHrs = ceilTotalHrs;
        }

        console.log('totalHrs:', totalHrs);
        console.log('finishTotalHrs:', finishTotalHrs);
    }

    function validateInputs(ths) {
        let inputsValid = true;

        const inputs =
            ths.parentElement.parentElement.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            const valid = inputs[i].checkValidity();
            if (!valid) {
                inputsValid = false;
                inputs[i].classList.add('invalid-input');
            } else {
                inputs[i].classList.remove('invalid-input');
            }
        }
        return inputsValid;
    }
}
