//var Flickr = require('flickrapi');
var Flickr = require('../flickr');
var url = require('../urlBuilder');
var rand = require('../randomize');

function findAll(req, res, next) {
	Flickr.call(function(error, flickr) {
		flickr.photos.search({
			user_id: flickr.options.user_id,
			page: 1,
			per_page: 50
		}, function(err, result) {
			if (err) {
				console.log(err);
				return err;
			} else {
				var photos = [];
				result.photos.photo.forEach(function(photo) {
					photo.url = url.to_url(photo);
					photo.small_url = url.to_small_url(photo);
					photos.push(photo);
				});
				console.log(photos);
				res.send(JSON.stringify({"photos": photos}));
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

function findNew(req, res, next) {
	Flickr.call(function(err, flickr) {
		if (err) {
			conosle.log(err);
			res.send(err);
		} else {
			flickr.photos.recentlyUpdated({
				user_id: flickr.options.user_id,
				page: 1,
				per_page: 25,
				min_date: "2016-09-01"
			}, function(err, result) {
				if (err) {
					console.log(err);
					res.send(err);
				} else {
					photos = [];
					result.photos.photo.forEach(function(photo) {
						console.log(photo);
						photo.url = url.to_url(photo);
						photo.small_url = url.to_small_url(photo);
						photos.push(photo)
					});
					res.send(JSON.stringify({"photos": photos}));
				}
			});
		}
	});
}

function findRandom(req, res, next) {
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
					photo.small_url = url.to_small_url(photo);
					photos.push(photo);
				});
				photos = rand.shuffle(photos).splice(0,25);

				console.log(photos);
				res.send(JSON.stringify({"photos": photos}));
			}
		});
	});
}

module.exports = {
	findAll: findAll,
	findByAlbum: findByAlbum,
	findNew: findNew,
	findRandom: findRandom,
};
