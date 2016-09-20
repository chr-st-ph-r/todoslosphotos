function to_url(photo) {
	return "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_h.jpg";
}

function to_small_url(photo) {
	return "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_z.jpg";
}

module.exports = {
	to_url: to_url,
	to_small_url: to_small_url
};
