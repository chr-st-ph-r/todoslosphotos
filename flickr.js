var api = require('./config');

var Flickr = require('flickrapi'),
	flickrOptions = {
		api_key: api.key,
		secret: api.secret,
		user_id: api.user_id,
		access_token: api.access_token,
		access_token_secret: api.access_token_secret
	};

function call(callback) {
	Flickr.authenticate(flickrOptions, callback);
}

module.exports = {
	options: flickrOptions,
	api: Flickr,
	call: call
};