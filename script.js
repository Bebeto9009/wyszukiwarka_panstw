const endpoint = 'https://raw.githubusercontent.com/ajotka/JSONs/master/countries.json';
var obj = 0;
var results = [];

fetch(endpoint)
    .then(function (res) {
        return  res.json();
})
    .then(function (data) {
        obj = data;
        // console.log(obj);
});

var searchInput = document.querySelector(".search-input");

searchInput.addEventListener('keyup', (e) => {
    // console.log("keyup działa poprawnie");
    // console.log(searchInput.value);
    searchEngine();
});

function finalResults () {

}

function searchEngine() {
    // console.log('searchEngine working! długość tablicy: ' + obj.length);

    console.log(results);
    for (var i = 0; i < obj.length; i++) {
        if (searchInput === "") {
            return results="";
        } else if (obj[i].name.includes(searchInput.value)){
            // results += obj[i].name;
            results.push(obj[i].name);
            return console.log('zwraca ' + results);
        }
    }
};

// function searchEngine() {
//     // console.log('searchEngine working! długość tablicy: ' + obj.length);
//     var results = [];
//     console.log(results);
//     for (var i = 0; i < obj.length; i++) {
//
//         if (obj[i].name.includes(searchInput.value)){
//                 // results += obj[i].name;
//                 results.push(obj[i].name);
//                 return console.log('zwraca ' + results);
//             }
//         }
// };

// obj.forEach(searchEngine);
// console.log(searchInput.value);


var resultDetails = document.querySelector('.result__details');
var resultSubtitle = document.querySelector('.result__subtitle');
