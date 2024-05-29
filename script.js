document
  .getElementById("get-weather-btn")
  .addEventListener("click", function() {
    var city = document.getElementById("city-input").value;
    if (city) {
      fetchWeather(city);
    } else {
      alert("Please enter a city name.");
    }
  });

function fetchWeather(city) {
  var apiKey = "b9c39ec78aff4bfaad391801242905"; // Replace with your actual API key
  var url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => console.error("Error:", error));
}

function displayWeather(data) {
  var weatherResult = document.getElementById("weather-result");
  if (data.error) {
    weatherResult.innerHTML = `<p>Error: ${data.error.message}</p>`;
  } else {
    weatherResult.innerHTML = `
            <h2>${data.location.name}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <p>Humidity:${data.current.humidity}</p>
        `;
  }
}


//https://www.weatherapi.com/unverified.aspx?tagid=09202405290209090529 
// In this project we have used this weather api
