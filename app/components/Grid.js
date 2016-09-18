var Grid = React.createClass({

    squares() {
        var data = this.props.data.data;

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
                    <Square key={i} background={datum.small_url} type={"photo"} text={"+"} id={datum.id}></Square>
                );
            });
        }

    },

    render() {
        return(
            <div className="grid">
                {this.squares()}
            </div>
        );
    }
});

window.Grid = Grid;
