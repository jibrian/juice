/**
* Header Component Controller
*/
define(["marionette", "header.view"],
	function(Marionette, HeaderView) {
		var HeaderController = Marionette.Controller.extend({
			initialize: function(options) {
				this.app = options.app;
			},
			loadView: function() {
				var headerView = new HeaderView({
					app: this.app
				});
				headerView.loadView();
			}
		});

		return HeaderController;
	}
);