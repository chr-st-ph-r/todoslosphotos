var Img = React.createClass({

    loaded(evt) {
        //console.log(evt.target.parentElement);
        evt.target.parentElement.children[0].classList.add('hidden');
    },

    changed(evt) {
        console.log("changed");
        evt.target.parentElement.children[0].classList.remove('hidden');
    },

    render() {
        return (
            <div className={"img"}>
                <div className={"loading"}></div>
                <img className={"brick"} data-src={this.props.src} onLoad={this.loaded} onChange={this.changed}/>
            </div>
        );
    }
});

window.Img = Img;
