/**
* Require JS config
*/
(function(require) {
	require.config({
		"deps": ["app"],
		"paths": {
			/**
			* Vendor libraries
			*/
			"backbone": "../vendor/backbone.marionette/backbone",
			"jquery": [
				"../vendor/backbone.marionette/jquery",
				"https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min",
			],
			"marionette": "../vendor/backbone.marionette/core/backbone.marionette.min",
			"underscore": "../vendor/backbone.marionette/underscore",
			"shim": {
				"backbone": {
					"deps": ["jquery", "underscore"]
				},
				"marionette": {
					"deps": ["backbone"]
				}
			},
			/**
			* App
			*/
			"app": "../app/app",
			"app.router": "../app/router"
			/**
			* Views
			*/

			/**
			* Templates
			*/

			/**
			* Models
			*/

			/**
			* Collections
			*/

			/**
			* Components
			*/

			/**
			* Modules
			*/
		},

	});

	
})(require);