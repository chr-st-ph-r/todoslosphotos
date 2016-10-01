var Square = React.createClass({
	showOverlay(evt) {
		console.log("entered");
		//evt.target.parentNode.parentNode.querySelector('.overlay').classList.remove('hidden');
	},

	hideOverlay(evt) {
		// document.getElementsByClassName('.overlay').forEach(function(o) {
		// 	o.classList.add('hidden');
		// });

	},

	render() {
		return (
			<div className="square" onMouseEnter={this.showOverlay} onMouseLeave={this.hideOverlay}>
				<Overlay pos={this.props.pos} text={this.props.text} type={this.props.type} id={this.props.id} photoClick={this.props.onPhotoClick}/>
				<Img src={this.props.background} />
			</div>
    	);
	}
});

window.Square = Square;
