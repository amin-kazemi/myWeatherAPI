class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-temp');
    this.img = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.feelLike = document.getElementById('w-feelLike');
    this.wind = document.getElementById('w-spead');
  }


  weatherInfo(weather){
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.temp.textContent = weather.main.temp + '°C';
    this.img.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    this.feelLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    this.wind.textContent = `Wind Spead: ${weather.wind.spead}`;
  }
}