var Square = React.createClass({
	showOverlay(evt) {
		//console.log(evt.target);
		//evt.target.parentNode.previousSibling.classList.remove('hidden');
		evt.target.parentNode.parentNode.querySelector('.overlay').classList.remove('hidden');
	},

	hideOverlay(evt) {
		//console.log(evt.target);
		document.querySelectorAll('.overlay').forEach(function(o) {
			o.classList.add('hidden');
		});
	},

	render() {
		return (
			<div className="square" onMouseEnter={this.showOverlay} onMouseLeave={this.hideOverlay}>
				<Overlay text={this.props.text} type={this.props.type} id={this.props.id}/>
				<Img src={this.props.background} />
			</div>
    	);
	}
});

window.Square = Square;
