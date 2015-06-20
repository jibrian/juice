/**
* App Controller
*/
define(["marionette", "app.view", "app.router", "header", "dashboard"],
	function(Marionette, AppView, AppRouter, header, dashboard) {
		var AppController = Marionette.Controller.extend({
			initialize: function(options) {
				this.app = options.app;	
			},
			loadModule: function(module, options) {
				this[module](options);
			},
			dashboard: function(options) {
				var dashboardController = new dashboard.Controller({
					app: this.app
				});
				dashboardController.loadView();
			}
		});

		return AppController;
	}
); // !define