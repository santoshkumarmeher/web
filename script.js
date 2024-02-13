function getWeather() {
  const apiKey = '03d467126321464d4ae9f8fde21ed351';
  const city = document.getElementById('city').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const weatherInfo = document.getElementById('weather-info');
          const temperature = data.main.temp - 273.15; // Convert to Celsius
          const description = data.weather[0].description;
          const cityOutput = data.name;
          const country = data.sys.country;

          weatherInfo.innerHTML = `
              <p>Location: ${cityOutput}, ${country}</p>
              <p>Temperature: ${temperature.toFixed(2)}°C</p>
              <p>Description: ${description}</p>
          `;
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
          const weatherInfo = document.getElementById('weather-info');
          weatherInfo.innerHTML = 'Error fetching weather data. Please try again.';
      });
}
