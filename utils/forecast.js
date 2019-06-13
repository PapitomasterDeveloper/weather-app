const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url = 'https://api.darksky.net/forecast/1fa1a6fd5a0adce4becbbbdae63f6755/' + latitude + ',' + longitude;

	request({url, json: true},(error, { body }) => {
        //const data = JSON.parse(response.body);
        //console.log(data.currently);
        //console.log(response.body.currently);
        if(error){
		callback('Unable to connect to weather service', undefined);
        } else if(body.error){
        	callback('Unable to find location', undefined);
        } else {
		callback(undefined, body.daily.data[0].summary + '\n It is currently ' + body.currently.temperature + ' degrees out.\n There is a ' + body.currently.precipProbability + ' % chance of rain.');
		//temperature: console.log('\n It is currently ' + response.body.currently.temperature + ' degrees out.\n')
        }
	});
}

module.exports = forecast;
