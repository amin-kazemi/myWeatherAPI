//Init Store 
const store = new Store();

//getData
const locationData = store.getData();

//Init Weather 
const weather = new Weather(locationData.city, locationData.country);

//Init ui
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);
//Save Changes Event Listener
document.getElementById("w-change-btn").addEventListener('click', function(){
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  //Call changeLocation
  weather.changeLocation(city, country);

  //setData
  store.setData(city, country);

  //Get and display weather
   getWeather();



  $('#locModal').modal('hide');
   
})


function getWeather(){
  weather.getWeather()
    .then(result => {
      // console.log(result);
      ui.weatherInfo(result);
      
    })
      .catch(err => console.log(err))
}