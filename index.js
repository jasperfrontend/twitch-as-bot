require('dotenv').config();
const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.CHANNEL,
		password: process.env.AUTH
	},
	channels: [ process.env.CHANNEL ]
});


client.connect();
setInterval(() => {
    var textArray = [
        'This stream is powered by https://antiscuff.com - The most powerful and easy to use OBS Cloud Hosting.',
        'This livestream is powered by https://antiscuff.com - Affordable, safe and powerful OBS Cloud Hosting.'
    ];
    var randomString = Math.floor(Math.random()*textArray.length);
    client.say('jasperdiscovers', textArray[randomString]);
}, 120000);
