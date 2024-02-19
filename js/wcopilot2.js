initMultiStepForm();

function initMultiStepForm() {
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

    calculateBtn.addEventListener('click', function () {
        let totalHrs = 20;

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

        console.log('valInnerPages:', valInnerPages);
        console.log('valBlog:', valBlog);
        console.log('valMigrate:', valMigrate);
        console.log('valIntegration:', valIntegration);
        console.log('totalHrs:', totalHrs);
    });

    submitBtn.addEventListener('click', function () {
        current += 1;
        setTimeout(function () {
            alert('Your Form Successfully Signed up');

            location.reload();
        }, 800);
    });

    // add function

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
