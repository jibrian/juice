/**
* Dashboard Module Controller
* Meat of application, brokers are app components here
*/
define(["marionette", "dashboard.view", "header"], 
	function(Marionette, DashboardView) {
		var DashboardController = Marionette.Controller.extend({
			initialize: function(options) {
				console.log("Dashboard controller initialized");
				this.app = options.app;
			},
			loadView: function() {
				var dashboardView = new DashboardView;
				this.app.view.main.show(dashboardView);
			},
		});	

		return DashboardController
	}
); // !define