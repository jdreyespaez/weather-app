const request = require('request-promise');

var API_KEY = 'c2affa192084647329a0b8a908e0c923';

class Weather {
    static retrieveByCity (city, callback) {
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`,
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