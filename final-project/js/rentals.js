var rentalinfo = "https://nuttall462.github.io/final-project/data/rentals.json";
var request = new XMLHttpRequest();
var i;

var rental = document.querySelector('.rental');

request.open('GET', rentalinfo);
request.responseType = 'json';
request.send();
request.onload = function () {
    var rentals = request.response;
    scootsRentals(rentals);
}

function scootsRentals(jsonObj) {
    var rentals = jsonObj['rentals'];
    for(i = 0; i < rentals[i].rentals.length; i++){
        var rentSection = document.createElement('section');

        var rname = document.createElement('h2');
        rname.textContent = rentals[i].name;
        rentSection.appendChild(rname);

        var rmax = document.createElement('p');
        rmax.textContent = rentals[i].max;
        rentSection.appendChild(rmax);

        var reserve = document.createElement('p');
        reserve.textContent = rentals[i].reservations[0];
        rentSection.appendChild(reserve);

        var reserve = document.createElement('p');
        reserve.textContent = rentals[i].reservations[1];
        rentSection.appendChild(reserve);

        var walk = document.createElement('p');
        walk.textContent = rentals[i].walkin[0];
        rentSection.appendChild(walk);

        var walk = document.createElement('p');
        walk.textContent = rentals[i].walkin[1];
        rentSection.appendChild(walk);
    }
    rental.appendChild(rentSection);
}

