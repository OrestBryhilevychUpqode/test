console.log('AlpineX Getro');

// function showSunPositions() {
//     const REQUEST_URL =
//         'https://api.ashbyhq.com/posting-api/job-board/alpinex?includeCompensation=true';
//     let request = new XMLHttpRequest();
//     request.open('GET', REQUEST_URL);
//     request.responseType = 'json';
//     request.send();
//     console.log(request);
//     request.onload = function () {
//         const data = request.response.jobs;
//         let allPositions = '';
//         let nullPositions = '';
//         const allPositionsWrapper = document.querySelector('.sun-careers');

//         if (data.length > 0) {
//             for (const job of data) {
//                 allPositions += `
//                      <div class="sun-careers__item">
//                         <span class="sun-careers__item-position">
//                             <a
//                                 href="${job.absolute_url}"
//                                 rel="noopener noreferrer"
//                                 target="_blank"
//                             >
//                                 <span class="sun-careers__item-heading">${job.title}</span>
//                             </a>
//                             <span class="sun-careers__item-text">${job.location.name}</span>
//                         </span>
//                         <span class="sun-careers__item-btn-wrap">
//                             <a
//                                 href="${job.absolute_url}"
//                                 rel="noopener noreferrer"
//                                 target="_blank"
//                             >
//                                 <span class="sun-careers__item-btn">
//                                     Learn more
//                                 </span>
//                             </a>
//                         </span>
//                     </div>
//                  `;
//             }
//             allPositions += allPositions;
//             allPositionsWrapper.innerHTML = allPositions;
//         } else {
//             nullPositions = `<div class="sun-careers__item">
//                                 <div class="sun-careers__item-heading-error">There are currently no open positions</div>
//                         </div>`;

//             allPositionsWrapper.innerHTML = nullPositions;
//         }
//     };
// }
// showSunPositions();

function getPositionGetro() {
    const userAction = async data => {
        const response = await fetch(
            'https://api.getro.com/v2/networks/:id/companies?name=Getro&topics=Health&job_functions=Legal ',
            {
                method: 'GET',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'X-User-Email': 'email@example.com',
                    'X-User-Token': 'password',
                },
            }
        );
        const myJson = await response.json(); //extract JSON from the http response
        // do something with myJson
        return myJson;
    };
}

getPositionGetro();

async function logMovies() {
    const response = await fetch(
        'https://api.getro.com/v2/locations/companies',
        {
            headers: {
                'Content-Type': 'application/json',
                'X-User-Email': 'elena@upqode.com',
                'X-User-Token': 'upqode2023',
            },
        }
    );
    const movies = await response.json();
    console.log(movies);
}

logMovies();
