module.exports = function(app) {
	var photos = require('./controllers/photos');
	app.get('/api/photos', photos.findAll);
	app.get('/api/photos/album/:albumID', photos.findByAlbum)

	var albums = require('./controllers/albums');
	app.get('/api/albums', albums.findAll);
};