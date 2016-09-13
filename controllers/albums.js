var Flickr = require('../flickr');

function findAll(req, res, next) {
	Flickr.call(function(err, flickr) {
		flickr.photosets.getList({
			user_id: flickr.options.user_id,
			page: 1,
			per_page: 500
		}, function(err, result) {
			if (err) {
				console.log(err);
				return err;
			} else {
				var albums = [];

				result.photosets.photoset.forEach(function(set) {
					albums.push(set);
				});

				console.log(albums);
				return albums;
			}
		});
	});
}

module.exports = {
	findAll: findAll
};