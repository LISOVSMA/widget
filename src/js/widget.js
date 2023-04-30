const wetherBlock = document.querySelector('#weather');

import myImage from '/src/images/loading.gif';

async function loadWeather() {
  wetherBlock.innerHTML = `
  <div class="weather__loading">
    <img src="${myImage}" alt="Loading..." />
  </div>`;

  const server =
    'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kharkiv&appid=1492ab3abea0bcc790a5243042e94c71';
  const response = await fetch(server, {
    method: 'GET',
  });
  const responseResult = await response.json();
  if (response.ok) {
    getWeather(responseResult);
  } else {
    wetherBlock.innerHTML = responseResult.message;
  }
}

function getWeather(data) {
  const location = data.name;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;

  const template = `
    <div class="weather__header">
      <div class="weather__main">
      <div class="weather__city">${location}</div>
      <div class="weather__status">${weatherStatus}</div>
      </div>
      <div class="weather__icon">
          <img src="https://api.openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}" />
      </div>
      </div>
      <div class="weather__temp">${temp}</div>
      <div class="weather__feels-like">Feels-like: ${feelsLike}</div>`;

  wetherBlock.innerHTML = template;
}

if (wetherBlock) {
  loadWeather();
}
