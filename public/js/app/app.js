/**
* App bootstrap
*/
define(["marionette", "dashboard.controller"], 
	function(Marionette, DashboardController) {

		// @TODO remove from global
		var App = Marionette.Application.extend({
			initialize: function() {
				
			}
		});

		window.app = new App();

		app.on("start", function() {
			console.log("App initialized");
			Backbone.history.start();
		})

		app.start();
	}
) // define