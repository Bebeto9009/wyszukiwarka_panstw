const endpoint = 'https://raw.githubusercontent.com/ajotka/JSONs/master/countries.json';
let obj = [];
let results = [];
let countriesArr = [];

fetch(endpoint)
    .then(function (res) {
        return  res.json();
})
    .then(function (data) {
        obj = data;
        countriesArr = obj.map(el => Object.values(el));
});

const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('keyup', (e) => {
    results.length = [];
    clearList();
    searchEngine();
});

function searchEngine() {
    for (let i = 0; i < countriesArr.length; i++) {
            if (countriesArr[i][0].toLowerCase().includes(searchInput.value.toLowerCase())) {
                {
                    results.push(countriesArr[i]);
                    console.log('zawiera results!: ' + results);
                    createList();
                }
            }
        }
}

function clearList() {
    let currentResults = document.querySelector('.results', '.active');
    currentResults.innerHTML='';
}

function createList() {
    for (let j = 0; j < results.length; j++) {

        let resultsItem = document.createElement('a');
        resultsItem.classList.add('results__item', 'result');

        let resultDetails = document.createElement('div');
        resultDetails.classList.add('result__details');
        resultDetails.innerHTML = results[j][0];

        let resultSubtitle = document.createElement('span');
        resultSubtitle.classList.add('result__subtitle');
        resultSubtitle.innerHTML = results[j][1];

        let currentResults = document.querySelector('.results', '.active');
        currentResults.appendChild(resultsItem);
        resultsItem.appendChild(resultDetails);
        resultDetails.appendChild(resultSubtitle);
    }
}



