
var rentalinfo = "https://nuttall462.github.io/final-project/data/rentals.json";

fetch(rentalinfo)
    .then((response) => response.json())
    .then((jsonObj) => {
    const rentals = jsonObj['rentals'];
    var rentSection = document.createElement('section');
    var rental = document.querySelector('.rental-info');
    for(let i = 0; i < rentals[i].length; i++){
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
   
  });

