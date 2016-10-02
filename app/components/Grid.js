var Grid = React.createClass({

    squares() {
        var data = this.props.data.data;
        var component = this;

        if (data.albums) {
            return data.albums.map(function(datum, i) {
                return (
                    <Square key={i} background={datum.primary_photo_extras.url_m} type={"album"} text={datum.title._content} id={datum.id}></Square>
                );
            });
        }

        if (data.photos) {
            return data.photos.map(function(datum, i) {
                return (
                    <Square pos={i} key={i} background={datum.small_url} type={"photo"} text={""} id={datum.id} onPhotoClick={component.props.onPhotoClick}></Square>
                );
            });
        }

    },

    logoClick() {
        location.hash = "";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    },

    render() {
        return(
            <div className="grid">
                <div className="logo stamp">
                    <h1 onClick={this.logoClick}>todos los photos</h1>
                </div>
                <div id="tiny" className="hidden" onClick={this.logoClick}>
                    <h2>tlp</h2>
                </div>
                {this.squares()}
            </div>
        );
    }
});

window.Grid = Grid;
