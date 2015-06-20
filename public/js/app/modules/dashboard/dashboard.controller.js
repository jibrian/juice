/**
* Dashboard Module Controller
* Meat of application, brokers are app components here
*/
define(["marionette", "dashboard.view"], 
	function(Marionette, DashBoardView) {
		var DashboardController = Marionette.Controller.extend({
			initialize: function(options) {
				console.log("Dashboard controller initialized");
			}
		});	

		return DashboardController
	}
); // !define