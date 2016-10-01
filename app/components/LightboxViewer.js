var LightboxViewer = React.createClass({
    isOpen() {
        if (this.props.isOpen) return "lightbox-container lightbox-open"
        else return "lightbox-container hidden";
    },

    render() {
        return (
            <div className={this.isOpen()}>
                <div className="close lightbox-control" onClick={this.props.onClose}>
                    x
                </div>
                <div className="prev lightbox-control" onClick={this.props.onPrev}>
                    &lsaquo;
                </div>
                <LightboxImage isOpen={this.props.isOpen} src={this.props.currentImage} />
                <div className="next lightbox-control" onClick={this.props.onNext}>
                    &rsaquo;
                </div>
            </div>
        )
    }
});

window.LightboxViewer = LightboxViewer;
