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
			"text": "../vendor/text-master/text",
			// App
			"app": "../app/app",
			"app.controller": "../app/app.controller",
			"app.router": "../app/app.router",
			"app.view": "../app/app.view",
			// Templates

			// Models

			// Collections

			//Modules
			"dashboard": "../app/modules/dashboard/index",

			// Components
			"footer": "../app/components/footer/index",
			"header": "../app/components/header/index",
			"redirect-trace": "../app/components/redirect-trace/index",
			"query-json": "../app/components/query-json/index",

			// Views
			"header.view": "../app/components/header/header.view",
			"dashboard.view": "../app/modules/dashboard/dashboard.view",
			// Controllers
			"header.controller": "../app/components/header/header.controller",
			"dashboard.controller": "../app/modules/dashboard/dashboard.controller",
		},

	});	
})(require);