fetch('./data/rentals.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("boxes");
            for (var i = 0; i < data.length; i++) {
                var table = document.createElement('table');
                table.className = "rent-tables";
                
                var image = document.createElement('img');
                image.setAttribute('src', data[i].imgurl);
                image.setAttribute('width', 200);
                table.appendChild(image);

                var p = document.createElement("tr");
                p.textContent = data[i].name;
                p.className = "vehicle-name";
                table.appendChild(p);

                var p2 = document.createElement("tr");
                p2.textContent = "Max persons: " + data[i].max;
                table.appendChild(p2);

                var reservations = document.createElement("tr");
                reservations.textContent = "Reservations:";
                table.appendChild(reservations);

                for (var j = 0; j < data[i].reservation.length; j++) {
                    var p3 = document.createElement("td");
                    p3.textContent = data[i].reservation[j];
                    reservations.appendChild(p3);
                    table.appendChild(reservations);
                }

                var walkins = document.createElement("tr");
                walkins.textContent = "Walk-ins:";
                table.appendChild(walkins);

                for (var k = 0; k < data[i].walkin.length; k++) {
                    var p4 = document.createElement("td");
                    p4.textContent = data[i].walkin[k];
                    walkins.appendChild(p4);
                    table.appendChild(walkins);
                }
                mainContainer.appendChild(table);
            }
            
        }
      