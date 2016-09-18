var App = React.createClass({

	loaded: [],

	isInViewport(el) {
    	var rect = el.getBoundingClientRect();

		return (
		    rect.bottom >= 0 &&
		    rect.right >= 0 &&

		    rect.top <= (
		    (window.innerHeight + 1000) ||
		    (document.documentElement.clientHeight + 1000)) &&

		    rect.left <= (
		    window.innerWidth ||
		    document.documentElement.clientWidth)
		 );
	},

	lazyLoad() {
		var self = this;
		var inview = 0;
		var primary = false;
		
		document.querySelectorAll(".brick").forEach(function(brick) {
			if (self.isInViewport(brick)) {
				inview++;

				brick.src = brick.getAttribute('data-src');
				self.loaded.push(brick);
				if (!primary) self.layout();
				if (inview > 10) primary = true;
			}

		});
		self.layout();
	},

	layout() {
		var self = this;
		imagesLoaded(self.loaded, function() {
			self.msnry.layout();
			//console.log("loaded", self.loaded);
			self.loaded = [];
		});

	},

	getInitialState() {
		return {"data": []};
	},

	fetch() {
		// todo: separate functions
		var self = this;
		var hash = location.hash ? location.hash : "#/albums";
		var loc = "http://localhost:5000/api/" + hash.toString().slice(2, this.length);

		fetch(loc)

		.then(function(data) {
			return data.json();
		})

		.then(function(json) {

			self.setState({"data": json}, function() {

				self.msnry = new Masonry('.grid', {
					columnWidth: 2,
					itemSelector: '.square',
					gutter: 2
				});

				//msnry.layout();

				self.lazyLoad();
				window.addEventListener('scroll', self.lazyLoad);

				});

			});
	},

	componentDidMount() {
		var self = this;
		this.fetch();
		window.onhashchange = function() {
			document.querySelectorAll('.loading').forEach(function(loader) {
				loader.classList.remove('hidden');
			});
			self.fetch();
		}
	},

	render() {
		return (
			<div className="main">
				<Sidebar />
		        <Grid data={this.state} />
			</div>
        );
	}
});

ReactDOM.render(
     <App />,
     document.getElementById('app-container')
);
