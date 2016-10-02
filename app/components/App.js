var App = React.createClass({

	loaded: [],

	load() {
		var self = this;
		var bricks = document.querySelectorAll('.brick');
		var brick;
		for (var i = 0; i < bricks.length; i++) {
			brick = bricks[i];
			brick.src = brick.getAttribute('data-src');
			self.loaded.push(brick);
			self.layout();
		}
	},

	layout() {
		var self = this;
		imagesLoaded(self.loaded, function() {
			self.msnry.layout();
			self.loaded = [];
		});

	},

	getInitialState() {
		return {
			"data": [],
		};
	},

	fetch() {
		// todo: separate functions
		var self = this;
		var hash = location.hash ? location.hash : "#/albums";
		var loc = "../api/" + hash.toString().slice(2, this.length);

		fetch(loc)

		.then(function(data) {
			return data.json();
		})

		.then(function(json) {

			self.setState({"data": json}, function() {
				//	console.log(this.state);

				self.msnry = new Masonry('.grid', {
					columnWidth: 2,
					itemSelector: '.square',
					stamp: '.stamp'
				});

				//msnry.layout();

				self.load();
			});
		});
	},

	componentDidMount() {
		var self = this;
		this.fetch();

		window.onhashchange = function() {
			var loaders = document.querySelectorAll('.loading');

			for (var i = 0; i < loaders.length; i++) {
				loaders[i].classList.remove('hidden');
			}

			self.fetch();
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
		
		window.addEventListener('scroll', function() {
			var tinyLogo = document.querySelector('#tiny');
			if (window.scrollY > 100) {
				tinyLogo.classList.remove('hidden');
				tinyLogo.classList.remove('tiny-logo-hidden');
				tinyLogo.classList.add('tiny-logo');
			} else {
				tinyLogo.classList.add('tiny-logo-hidden');
			}
		});
	},

	render() {
		return (
			<div className="main">
				<Lightbox data={this.state} />
			</div>
        );
	}
});

ReactDOM.render(
     <App />,
     document.getElementById('app-container')
);
