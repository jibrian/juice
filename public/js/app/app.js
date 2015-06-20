/**
* App bootstrap
*/
define(["marionette", "app.controller", "app.router", "app.view"], 
	function(Marionette, AppController, AppRouter, AppView) {
		var App = Marionette.Application.extend({
			initialize: function() {
				var options = {
					app: this
				}
				this.controller = new AppController(options);
				this.router = new AppRouter(options);
				this.view = new AppView(options);
			}
		});

		var app = new App();

		window.foo = app;

		app.on("start", function() {
			Backbone.history.start();
		})

		app.start();
	}
) // !define