const endpoint = 'https://raw.githubusercontent.com/ajotka/JSONs/master/countries.json';
var obj = 0;

fetch(endpoint)
    .then(function (res) {
        return  res.json();
})
    .then(function (data) {
        obj = data;
        console.log(obj);
});

var searchInput = document.querySelector(".search-input");

searchInput.addEventListener('keyup', (e) => {
    console.log("keyup działa poprawnie");
    console.log(searchInput.value);
    searchEngine();
});


function searchEngine() {
    console.log('searchEngine working! długość tablicy: ' + obj.length);
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].name.includes(searchInput.value)) {
            var results = [];
            results += obj[i].name;
            return console.log('zwraca ' + results);
        }

    }

};

obj.forEach(searchEngine);
console.log(searchInput.value);

var resultDetails = document.querySelector('.result__details');
var resultSubtitle = document.querySelector('.result__subtitle');
