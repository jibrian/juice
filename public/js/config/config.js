/**
* Require JS Config
* Handle dependencies and let require do its thing
*/
(function(require) {
	require.config({
		"deps": ["app"],
		"paths": {
			// Vendor Libraries
			"backbone": "../vendor/backbone.marionette/backbone",
			"jquery": [
				"../vendor/backbone.marionette/jquery",
				"https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min",
			],
			"marionette": "../vendor/backbone.marionette/backbone.marionette.min",
			"underscore": "../vendor/backbone.marionette/underscore",
			"shim": {
				"backbone": {
					"deps": ["jquery", "underscore"]
				},
				"marionette": {
					"deps": ["backbone"]
				}
			},
			// App
			"app": "../app/app",
			"app.router": "../app/router",
			// Templates

			// Models

			// Collections

			//Modules

			// Components
			"footer": "../app/components/footer/index",
			"dashboard": "../app/comonents/dashboard/index",
			"header": "../app/comonents/header/index",
			"redirect-trace": "../app/comonents/redirect-trace/index",
			"query-json": "../app/comonents/query-json/index",

		},

	});	
})(require);