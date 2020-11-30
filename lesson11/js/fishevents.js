const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const towns = jsObject['towns'];
        var eventList = document.createElement('ul');
        var townEvents = document.querySelector('.fEvents');
        if (towns[1].name == "Fish Haven"){
          for (let i = 0; i < towns[1].events.length; i++) {
            var event = document.createElement('li');
            event.textContent = towns[1].events[i];
            eventList.appendChild(event);
          }
        }
        townEvents.appendChild(eventList);
        
    });