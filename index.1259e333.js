const e=document.querySelector("#weather");e&&async function(a){e.innerHTML='\n  <div class="weather__loading">\n    <img src="/images/loading.gif" alt="loading..." />\n  </div>';const i=await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kharkiv&appid=1492ab3abea0bcc790a5243042e94c71",{method:"GET"}),n=await i.json();i.ok?function(a){const i=a.name,n=Math.round(a.main.temp),t=Math.round(a.main.feels_like),s=a.weather[0].main,r=a.weather[0].icon,c=`\n  <div class="weather__header">\n    <div class="weather__main">\n    <div class="weather__city">${i}</div>\n    <div class="weather__status">${s}</div>\n    </div>\n    <div class="weather__icon">\n        <img src="https://api.openweathermap.org/img/w/${r}.png" alt="${s}" />\n    </div>\n    </div>\n    <div class="weather__temp">${n}</div>\n    <div class="weather__feels-like">Feels-like: ${t}</div>`;e.innerHTML=c}(n):e.innerHTML=n.message}();
//# sourceMappingURL=index.1259e333.js.map
