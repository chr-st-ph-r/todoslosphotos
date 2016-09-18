var Flickr = require('../flickr');
var request = require('request');

function findAll(req, res, next) {
	Flickr.call(function(err, flickr) {
		flickr.tags.getListUser({
			user_id: flickr.options.user_id,
			page: 1,
			per_page: 500
		}, function (err, result) {
			if (err) {
				console.log(err);
				res.send(err);
			} else {
				var tags = [];

				result.who.tags.tag.forEach(function(tag) {
					tags.push(tag._content);
				});

				console.log(tags);
				res.send(JSON.stringify({"tags": tags}));
			}
		});
	});
}

module.exports = {
	findAll: findAll
};
