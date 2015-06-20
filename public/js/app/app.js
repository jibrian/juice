/**
* App bootstrap
*/
define(["marionette", "dashboard.controller"], 
	function(Marionette, DashboardController) {
		console.log("App initialized");

		// @TODO remove from global
		window.App = new Marionette.Application;
	}
) // define