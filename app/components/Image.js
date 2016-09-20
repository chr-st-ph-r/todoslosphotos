var Img = React.createClass({

    loaded(evt) {
        evt.target.parentElement.children[0].classList.add('hidden');
    },

    render() {
        return (
            <div className={"img"}>
                <div className={"loading"}></div>
                <img className={"brick"} data-src={this.props.src} onLoad={this.loaded}/>
            </div>
        );
    }
});

window.Img = Img;
