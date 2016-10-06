var Navbar = React.createClass({
    albumLinkClick() {
        var links = document.querySelectorAll('.navlink');
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove('selected');
        }
        location.hash = "";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.querySelector('#albumlink').classList.add('selected');
    },

    newLinkClick() {
        var links = document.querySelectorAll('.navlink');
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove('selected');
        }
        location.hash = "/photos/new";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.querySelector('#newlink').classList.add('selected');
    },

    randomLinkClick() {
        var links = document.querySelectorAll('.navlink');
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove('selected');
        }
        location.hash = "/photos/random";
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.querySelector('#randlink').classList.add('selected');
    },

    tinyClick() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    },

    render() {
        return(
            <div className="navBar stamp">
                <h1 className="logo">todos los photos</h1>
                <h3 id="albumlink" className="navlink" onClick={this.albumLinkClick}>albums</h3>
                <h3 id="newlink" className="navlink" onClick={this.newLinkClick}>new</h3>
                <h3 id="randlink" className="navlink" onClick={this.randomLinkClick}>random</h3>
                <div id="tiny" className="hidden" onClick={this.tinyClick}>
                    <h2>^</h2>
                </div>
            </div>
        )
    }
});

window.Navbar = Navbar;
