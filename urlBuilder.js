function to_url(photo) {
	return "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_b.jpg";
}

module.exports = {
	to_url: to_url,
};