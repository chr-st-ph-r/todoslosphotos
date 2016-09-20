var LightboxViewer = React.createClass({
    isOpen() {
        if (this.props.isOpen) return "lightbox-container"
        else return "lightbox-container hidden";
    },

    render() {
        return (
            <div className={this.isOpen()} onDoubleClick={this.props.onDoubleClick}>
                <LightboxImage isOpen={this.props.isOpen} src={this.props.currentImage} />
            </div>
        )
    }
});

window.LightboxViewer = LightboxViewer;
