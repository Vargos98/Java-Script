document.addEventListener('DOMContentLoaded', () => {
  const cityInput = document.getElementById('city-input')
  const getWeatherBtn = document.getElementById('get-weather-btn')
  const weatherInfo = document.getElementById('weather-info')
  const cityNameDisplay = document.getElementById('city-name')
  const temperatureDisplay = document.getElementById('temperature')
  const descriptionDisplay = document.getElementById('description')
  const errorMessage = document.getElementById('error-message');
  const apiKEY = b0fce0afe9855f29e20ad114ba17b371

  getWeatherBtn.addEventListener('click',async()=>{
    const city = cityInput.value.trim();
    if(!city) return;
  
    try {

      const weatherData = await fetchWeatherData(city)
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  
  
  
  
  })  
  async function fetchWeatherData(city){
      
  }

  function displayWeatherData(weatherData){

  }

  function showError(){
    weatherInfo.classList.add('hidden')
    errorMessage.classList.remove('hidden')
  }


})