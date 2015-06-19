/**
* Require JS config
*/
(function(require) {
	require.config({
		"backbone": "../vendor/backbone.marionette/backbone",
		"jquery": [
			"https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js",
			"../vendor/backbone.marionette/jquery"
		],
		"marionette": "../vendor/backbone.marionette/core/backbone.marionette.min.js",
		"babysitter": "../vendor/backbone.marionette/backbone.babysitter.js",
		"wreqr": "../vendor/backbone.marionette/wreqr.js",
		shim: {
			"backbone": {
				"deps": ["jquery", "underscore"]
			},
			"marionette": {
				"deps": ["backbone", "babysitter", "wreqr"]
			}
		}
	});
})(require);