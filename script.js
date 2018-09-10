const endpoint = 'https://raw.githubusercontent.com/ajotka/JSONs/master/countries.json';
const searchInput = document.querySelector('.search-input');
const currentResults = document.querySelector('.results.active');
let obj = [];
let countriesArr = [];

fetch(endpoint)
    .then(function (res) {
        return  res.json();
})
    .then(function (data) {
        obj = data;
        countriesArr = obj.map(el => Object.values(el));
});

searchInput.addEventListener('keyup', (e) => {
    clearList();
    searchEngine();
});

function createRow(country) {

    let resultsItem = document.createElement('a');
    resultsItem.classList.add('results__item', 'result');

    let resultDetails = document.createElement('div');
    resultDetails.classList.add('result__details');
    resultDetails.innerHTML = country[0];

    let resultSubtitle = document.createElement('span');
    resultSubtitle.classList.add('result__subtitle');
    resultSubtitle.innerHTML = country[1];

    currentResults.appendChild(resultsItem);
    resultsItem.appendChild(resultDetails);
    resultDetails.appendChild(resultSubtitle);
}

function searchEngine() {
    for (let i = 0; i < countriesArr.length; i++) {
        if (countriesArr[i][0].toLowerCase().includes(searchInput.value.toLowerCase())) {
            createRow(countriesArr[i]);
        }
    }
}

function clearList() {
    currentResults.innerHTML='';
}





