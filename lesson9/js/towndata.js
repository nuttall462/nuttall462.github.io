const requestURL = 'https://https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    let card = document.createElement('section');
    let h21 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
       

    h2.textContent = towns[1].name;
    p.textContent = "Year Founded: " + towns[1].yearFounded;
    p2.textContent = "Population: " + towns[1].currentPopulation;
    p3.textContent = "Annual Rain Fall: " + towns[1].averageRainfall;
        

    card.appendChild(h21);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
        

    let card2 = document.createElement('section');
    let h22 = document.createElement('h2');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
        
       

    h22.textContent = towns[4].name;
    p4.textContent = "Year Founded: " + towns[4].yearFounded;
    p5.textContent = "Population: " + towns[4].currentPopulation;
    p6.textContent = "Annual Rain Fall: " + towns[4].averageRainfall;
        

    card2.appendChild(h22);
    card2.appendChild(p4);
    card2.appendChild(p5);
    card2.appendChild(p6);
        

    let card3 = document.createElement('section');
    let h23 = document.createElement('h2');
    let p7 = document.createElement('p');
    let p8 = document.createElement('p');
    let p9 = document.createElement('p');
        
       

    h23.textContent = towns[5].name;
    p7.textContent = "Year Founded: " + towns[5].yearFounded;
    p8.textContent = "Population: " + towns[5].currentPopulation;
    p9.textContent = "Annual Rain Fall: " + towns[5].averageRainfall;
        

    card3.appendChild(h23);
    card3.appendChild(p7);
    card3.appendChild(p8);
    card3.appendChild(p9);
       

    document.querySelector('div.cards').appendChild(card);
    document.querySelector('div.cardss').appendChild(card2);
    document.querySelector('div.cardsss').appendChild(card3);
    
  });