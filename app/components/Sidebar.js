var Sidebar = React.createClass({

    logoClick() {
        location.hash = "";
    },

    render() {
        return (
            <div className="sidebar">
                <h1 onClick={this.logoClick}>todos<br />los<br />photos</h1>
            </div>
        );
    }
});

window.Sidebar = Sidebar;
