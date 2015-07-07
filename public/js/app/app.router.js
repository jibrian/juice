/**
* App Router
* @see app.controller.load
*/
var Backbone = require("backbone");

module.exports = Backbone.Router.extend({
	initialize: function(options) {
		this.app = options.app;
	},
	routes: {
		"": "loadIndex",
		"adblock-parse": "loadAdblockParse",
		"json-query": "loadJSONQuery",
		"juxtapose": "loadJuxtapose",
		"query-json": "loadQueryJSON",
		"redirect-trace": "loadRedirectTrace",
		"uri-dencoder": "loadURIDencoder",
	},
	loadIndex: function() {
		// @TODO Set up lander module
		this.app.controller.load("dashboard");
	},
	loadJSONQuery: function() {
		this.app.controller.load("json-query");
	},
	loadJuxtapose: function() {
		this.app.controller.load("juxtapose");
	},
	loadQueryJSON: function() {
		this.app.controller.load("query-json");
	},
	loadRedirectTrace: function() {
		this.app.controller.load("redirect-trace");
	},
	loadURIDencoder: function() {
		this.app.controller.load("uri-dencoder");
	}
	// loadAdblockParse: function() {
	// 	this.app.controller.load("adblock-parse");
	// }
});

