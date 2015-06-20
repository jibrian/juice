/**
* App View
*/
define(["marionette"],
	function(Marionette) {
		var AppView = Marionette.LayoutView.extend({
			el: "#app",
			initialize: function(options) {

			},
			regions: {
				"header": ".header",
				"main": ".main",
				"footer": ".footer"
			}
		});

		return AppView;
	}
); // !define