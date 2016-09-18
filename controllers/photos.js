//var Flickr = require('flickrapi');
var Flickr = require('../flickr');
var url = require('../urlBuilder');

function findAll(req, res, next) {
	Flickr.call(function(error, flickr) {
		flickr.photos.search({
			user_id: flickr.options.user_id,
			page: 1,
			per_page: 500
		}, function(err, result) {
			if (err) {
				console.log(err);
				return err;
			} else {
				var photos = [];
				result.photos.photo.forEach(function(photo) {
					photo.url = url.to_url(photo);
					photos.push(photo);
				});
				console.log(photos);
				res.send(JSON.stringify(photos));
			}
		});
	});
}

function findByAlbum(req, res, next) {
	Flickr.call(function(err, flickr) {
		if (err) {
			console.log(err);
			return err;
		} else {
			flickr.photosets.getPhotos({
				user_id: flickr.options.user_id,
				photoset_id: req.params.albumID,
				page: 1,
				per_page: 500
			}, function(err, result) {
				if (err) {
					console.log(err);
					return err;
				} else {
					var photos = [];
					result.photoset.photo.forEach(function(photo) {
						photo.url = url.to_url(photo);
						photo.small_url = url.to_small_url(photo);
						photos.push(photo);
					});
					console.log(photos);
					res.send(JSON.stringify({"photos": photos}));
				}
			});
		}
	});
}

function findByTag(req, res, next) {
	Flickr.call(function(err, flickr) {
		if (err) {
			console.log(err);
			return err;
		} else {
			flickr.photos.search({
				user_id: flickr.options.user_id,
				tags: req.params.tagName,
				page: 1,
				per_page: 500
			}, function(err, result) {
				if (err) {
					console.log(err);
					return err;
				} else {
					var photos = [];
					result.photos.photo.forEach(function(photo) {
						photo.url = url.to_url(photo);
						photos.push(photo);
					});
					console.log(photos);
					res.send(JSON.stringify(photos));
				}
			});
		}
	});
}

module.exports = {
	findAll: findAll,
	findByAlbum: findByAlbum,
	findByTag: findByTag
};
