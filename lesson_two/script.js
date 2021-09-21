'use strict';

function checkData(data) {
    console.log(data);
}

document.getElementById('ajax-get').addEventListener('click', function () {

    fetch('tel.json')
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById('ajax-block')
                .insertAdjacentHTML('beforeend', `<p>${data.name} - <strong>${data.tel}</strong></p>`)
        });
});