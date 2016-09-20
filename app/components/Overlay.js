var Overlay = React.createClass({

    handleClick() {
        if (this.props.type === "album") {
            location.hash = "/photos/album/" + this.props.id;
        } else {
            this.props.photoClick(this.props.id, this.props.pos);
        }
    },

    render() {
        return (
            <div className="overlay hidden" onClick={this.handleClick}>
                <span>
                    {this.props.text}
                </span>
            </div>
        )
    }
});

window.Overlay = Overlay;
