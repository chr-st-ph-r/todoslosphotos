module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index.html');
	});

	var photos = require('./controllers/photos');
	app.get('/api/photos', photos.findAll);
	app.get('/api/photos/album/:albumID', photos.findByAlbum);
	app.get('/api/photos/new', photos.findNew);
	app.get('/api/photos/random', photos.findRandom);

	var albums = require('./controllers/albums');
	app.get('/api/albums', albums.findAll);

};
