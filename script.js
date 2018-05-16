const getWeather = (zipcode) => {
    let zipcode = $('#zipcode').val;

    return fetch(`http://api.openweathermap.org/data/2.5/weather?zip=10065,us&appid=80e3ec7edbde84117ee242d3255da6c2`, )

        .then(response => {
            return response.json();
        })
        .then(json => {
            const weather2day = {
                description: ,
                temp: ,
            }
        }
        );


};

getWeather();

$('button').click()

    // return fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${config.apikey}`,)
