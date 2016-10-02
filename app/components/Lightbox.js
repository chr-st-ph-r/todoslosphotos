var Lightbox = React.createClass({

    openLightbox(id, pos) {
        var photos = this.props.data.data.photos;
        this.setState({
            currentImage: photos[pos],
            pos: pos,
            isOpen: true,
        });
    },

    nextPhoto() {

        var photos = this.props.data.data.photos;
        var numOfPhotos = photos.length;
        var pos = this.state.pos;

        if (pos < numOfPhotos-1) {
            pos += 1;
            this.setState({
                pos: pos,
                currentImage: photos[pos]
            });
        } else {
            this.setState({
                pos: 0,
                currentImage: photos[0]
            });
        }

    },

    prevPhoto() {

        var photos = this.props.data.data.photos;
        var numOfPhotos = photos.length;
        var pos = this.state.pos;

        if (pos > 0) {
            pos -= 1;
            this.setState({
                pos: pos,
                currentImage: photos[pos]
            });
        } else {
            pos = numOfPhotos-1;
            this.setState({
                pos: pos,
                currentImage: photos[pos]
            });
        }

    },

    closeLightbox() {
        this.setState({
            isOpen: false
        });
    },

    handleFullscreen() {
        // http://www.webdesignerdepot.com/2013/03/how-to-use-the-fullscreen-api/
        var doc = document.documentElement;
        if (doc.requestFullscreen) {
            doc.requestFullscreen();
        } else if (doc.webkitRequestFullScreen) {
            doc.webkitRequestFullScreen();
        } else if (doc.mozRequestFullScreen) {
            doc.mozRequestFullScreen();
        }

    },

    handleKeys(evt) {
        console.log("evt")
    },

    getInitialState() {
        return {
            currentImage: "",
            isOpen: false,
            pos: 0,
        }
    },

    render() {
        return (
            <div id="lightbox">
                <LightboxViewer isOpen={this.state.isOpen} currentImage={this.state.currentImage} onClose={this.closeLightbox} onNext={this.nextPhoto} onPrev={this.prevPhoto} onFullScreen={this.handleFullscreen} onKeyPress={this.handleKeys}/>
                <Grid data={this.props.data} onPhotoClick={this.openLightbox}/>
            </div>
        )
    }
});

window.Lightbox = Lightbox;
