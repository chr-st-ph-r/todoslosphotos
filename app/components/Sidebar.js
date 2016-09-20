var Sidebar = React.createClass({

    logoClick() {
        location.hash = "";
    },

    render() {
        return (
            <div className="sidebar">
                <h1 className="stamp" onClick={this.logoClick}>todos los photos</h1>
            </div>
        );
    }
});

window.Sidebar = Sidebar;
