var Overlay = React.createClass({

    handleClick() {
        if (this.props.type === "album") {
            location.hash = "/photos/album/" + this.props.id;
        } else {
            this.props.photoClick(this.props.id, this.props.pos);
        }
    },

    getClass() {
        if (this.props.type == "album") {
            return "overlay album";
        } else {
            return "overlay photo";
        }
    },

    render() {
        return (
            <div className={this.getClass()} onClick={this.handleClick}>
                <span>
                    {this.props.text}
                </span>
            </div>
        )
    }
});

window.Overlay = Overlay;
