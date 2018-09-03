const endpoint = 'https://raw.githubusercontent.com/ajotka/JSONs/master/countries.json';

// var request = new XMLHttpRequest();
//
// request.open('GET', endpoint, true);
//
// request.onload = function () {
//     var data = JSON.parse(this.response);
//
//     console.log(data);
// };
//
// request.send();

fetch(endpoint)
    .then(function (res) {
        return  res.json();
})
    .then(function (data) {
        console.log(data[0]);
})