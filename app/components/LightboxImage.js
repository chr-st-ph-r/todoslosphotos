var LightboxImage = React.createClass({
    loading() {
        if (this.props.isOpen) return "loading hidden"
        else return "loading";
    },

    componentDidMount() {
        document.querySelector('#lightbox').querySelector('.loading').classList.remove('hidden');
    },

    componentDidUpdate() {
        document.querySelector('#lightbox').querySelector('.loading').classList.remove('hidden');
    },

    loaded() {
        document.querySelector('#lightbox').querySelector('.loading').classList.add('hidden');
    },

    render() {

        return (
            <div className="lightbox-image-container">
                <div className="loading hidden"></div>
                <img className="lightbox-image" src={this.props.src.url} onLoad={this.loaded} />
            </div>
        )
    }
});

window.LightboxImage = LightboxImage;
