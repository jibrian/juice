/**
* App bootstrap
*/
define(["marionette", "dashboard.controller"], 
	function(Marionette, DashboardController) {
		console.log("App initialized");

		App = new Marionette.Application;

		foo = new DashboardController({
			"test": "test"
		});

	}
) // define