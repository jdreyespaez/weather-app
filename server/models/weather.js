const request = require('request-promise');

const API_KEY = '8923642cc6a019b215609d37851e0e9d';

class Weather {
    static retrieveByCity (city, callback) {
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_key}&units=imperial`,
            json: true
        }).then(function (res) {
            callback(res);
        }).catch(function (err) {
            console.log(err);
            callback({ error: 'Could not reach OWM Api.' });
        })
    }
}

module.exports = Weather;