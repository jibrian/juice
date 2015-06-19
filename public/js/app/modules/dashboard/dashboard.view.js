/**
* Dashboard Module View
* Handle views for apps components
*/
define(["marionette"], 
function(Marionette) {
	var DashboardView = Marionette.LayoutView.extend({
		initialize: function(options) {
			console.log("Dashboard view initialized");
		}
	});

	return DashboardView;
});