const endpoint = 'https://raw.githubusercontent.com/ajotka/JSONs/master/countries.json';
let obj = [];
let results = [];
let countriesArr = 0;

fetch(endpoint)
    .then(function (res) {
        return  res.json();
})
    .then(function (data) {
        obj = data;
        countriesArr = obj.map(el => Object.values(el));
        // console.log(countriesArr);
});

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener('keyup', (e) => {
    results.length = [];
    searchEngine();
});

function searchEngine() {
    for (let i = 0; i < countriesArr.length; i++){

        resultDetails.innerHTML = results;
            if (countriesArr[i][0].toLowerCase().includes(searchInput.value.toLowerCase())) {
                if (results.includes(countriesArr[i])) {
                    return;
                } else {
                    results.push(countriesArr[i]);
                    console.log('zawiera! ' + countriesArr[i]);
                    console.log('zawiera results!: ' + results);
                    resultDetails.innerHTML += results;
                }
            }
        }
};



// function searchEngine() {
//     console.log('wartość searchInput: ' + searchInput.value);
//
//     for (var i = 0; i < obj.length; i++) {
//         if (searchInput.value == '') {
//             results = [];
//             resultDetails.innerHTML = '';
//             console.log('results from if: ' + results)
//         } else if (obj[i].name.includes(searchInput.value) && !results.includes(obj[i].name)) {
//             // results += obj[i].name;
//             results = [];
//             results.push(obj[i].name);
//             resultDetails.innerHTML += results;
//             return console.log('pierwszy else if zwraca: ' + results);
//         } else if (obj[i].name.includes(searchInput.value) && results.includes(obj[i].name)) {
//             for (var j = 0; j < results.length; j++) {
//                 if (results.includes(searchInput.value)){
//                     results = [];
//                     resultDetails.innerHTML += results;
//                     console.log('drugi else if: ' + results);
//
//                 }
//             }
//         }
//     }
// };

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

