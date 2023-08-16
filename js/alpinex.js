console.log('AlpineX Getro');

function showalpinexPositions() {
    const REQUEST_URL =
        'https://api.ashbyhq.com/posting-api/job-board/alpinex?includeCompensation=true';
    let request = new XMLHttpRequest();
    request.open('GET', REQUEST_URL);
    request.responseType = 'json';
    request.send();
    console.log(request);
    request.onload = function () {
        const data = request.response.jobs;
        let allPositions = '';
        let nullPositions = '';
        const allPositionsWrapper = document.querySelector('.alpinex-careers');

        if (data.length > 0) {
            for (const job of data) {
                allPositions += `
                 <div class="alpinex-careers--item">
                <h4 class="alpinex-careers--item-title">
                    <a
                        href="${job.jobUrl}"
                        class="alpinex-careers--item-title-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ${job.title}
                    </a>
                </h4>

                <div class="alpinex-careers--item-info">
                    <div class="alpinex-careers--item-info-team">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M16.6663 5L7.49967 14.1667L3.33301 10"
                                stroke="#475467"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <span>${job.team}</span>
                    </div>
                    <div class="alpinex-careers--item-info-city">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_1490_5374)">
                                <path
                                    d="M1.66699 9.99996H18.3337M1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333M1.66699 9.99996C1.66699 5.39759 5.39795 1.66663 10.0003 1.66663M18.3337 9.99996C18.3337 14.6023 14.6027 18.3333 10.0003 18.3333M18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663M10.0003 1.66663C12.0847 3.94859 13.2693 6.90999 13.3337 9.99996C13.2693 13.0899 12.0847 16.0513 10.0003 18.3333M10.0003 1.66663C7.91593 3.94859 6.73137 6.90999 6.66699 9.99996C6.73137 13.0899 7.91593 16.0513 10.0003 18.3333"
                                    stroke="#475467"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1490_5374">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>${job.location}</span>
                    </div>
                    <a
                        href="${job.jobUrl}"
                        class="alpinex-careers--item-info-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Learn More</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                        >
                            <path
                                d="M7 7.5L17 17.5M17 17.5V7.5M17 17.5H7"
                                stroke="#162CB9"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            /></svg
                    ></a>
                </div>
            </div>
                 
                 `;
            }
            allPositions += allPositions;
            allPositions += allPositions;
            allPositionsWrapper.innerHTML = allPositions;
        } else {
            nullPositions = `<div class="alpinex-careers__item">
                                <div class="alpinex-careers__item-heading-error">There are currently no open positions</div>
                        </div>`;

            allPositionsWrapper.innerHTML = nullPositions;
        }
    };
}
showalpinexPositions();

// async function logMovies() {
//     const response = await fetch(
//         'https://api.ashbyhq.com/posting-api/job-board/alpinex?includeCompensation=true'
//     );
//     const movies = await response.json();
//     console.log(movies);
//     console.log(movies.jobs[0].jobUrl);
// }

// logMovies();
