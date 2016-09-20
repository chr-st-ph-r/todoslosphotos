var Lightbox = React.createClass({

    openLightbox(id, pos) {
        //console.log(pos);
        var photos = this.props.data.data.photos;
        console.log(id === photos[pos].id);
        this.setState({
            currentImage: photos[pos],
            isOpen: true
        });
    },

    closeLightbox() {
        this.setState({
            isOpen: false
        });
    },

    getInitialState() {
        return {
            currentImage: "",
            isOpen: false
        }
    },

    render() {
        return (
            <div id="lightbox">
                <LightboxViewer isOpen={this.state.isOpen} currentImage={this.state.currentImage} onDoubleClick={this.closeLightbox}/>
                <Grid data={this.props.data} onPhotoClick={this.openLightbox}/>
            </div>
        )
    }
});

window.Lightbox = Lightbox;
