// import our config file here and make it a variable

const getWeather = () => {
  let zipcode = $('#zipcode').val;
  return fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${config.apikey}`)
}
