var rentalinfo = "https://nuttall462.github.io/final-project/data/rentals.json";
var request = new XMLHttpRequest();

var rental = document.querySelector('.rental');

request.open('GET', rentalinfo);
request.responseType = 'json';
request.send();
request.onload = function () {
    var rentals = request.response;
    scootsRentals(rentals);
}

function scootsRentals(jsonObj) {
    const rentals = jsonObj['rentals'];
    for(let i = 0; i < rentals[i].length; i++){
        var rentSection = document.createElement('section');

        var rname = document.createElement('h2');
        rname.textContent = rentals[i].name;
        rentSection.appendChild(rname);

        var rmax = document.createElement('p');
        rmax.textContent = rentals[i].max;
        rentSection.appendChild(rmax);

        for (let j = 0; j < rentals[i].reservations.length; j++) {
            var reserve = document.createElement('p');
            reserve.textContent = rentals[i].reservations[j];
            rentSection.appendChild(reserve);

            var reserve = document.createElement('p');
            reserve.textContent = rentals[i].reservations[j];
            rentSection.appendChild(reserve);
          }

          for (let k = 0; k < rentals[i].walkin.length; k++) {
            var walk = document.createElement('p');
            walk.textContent = rentals[i].walkin[k];
            rentSection.appendChild(walk);
    
            var walk = document.createElement('p');
            walk.textContent = rentals[i].walkin[k];
            rentSection.appendChild(walk);
          }
        
        rental.appendChild(rentSection);
    }
   
}

