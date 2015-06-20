/**
* App Controller
*/
define(["marionette", "app.view", "header", "dashboard"],
	function(Marionette, AppView, header, dashboard) {
		var AppController = Marionette.Controller.extend({
			initialize: function(options) {
				this.app = options.app;	
				this.app.view = new AppView(options);
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