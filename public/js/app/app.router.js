/**
* App Router
*/
define(["backbone", "dashboard"], 
	function(Backbone, dashboard) {
		var AppRouter = Backbone.Router.extend({
			initialize: function(options) {
				this.app = options.app;
			},
			routes: {
				"dashboard": "initDashboard",
			},
			initDashboard: function() {
				this.app.controller.loadModule("dashboard", {
					app: this.app
				});
			}
		});

		return AppRouter;
	}
); // !define