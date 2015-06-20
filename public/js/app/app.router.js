/**
* App Router
*/
define(["backbone"], 
	function(Backbone) {
		var AppRouter = Backbone.Router.extend({
			initialize: function(options) {
				console.log("Router initialized");
			},
			routes: {
				"dashboard": "initDashboard"
			},
			initDashboard: function() {
			
			}
		});

		return AppRouter;
	}
); // !define