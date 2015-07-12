/**
* App bootstrap
*/
var Marionette = require("marionette");
var Backbone = require("backbone");
var AppController = require("app.controller");
var AppRouter = require("app.router");
var components = require("components");
var modules = require("modules");
var utilities = require("utilities");
var entities = require("entities");

module.exports = Marionette.Application.extend({
	initialize: function(options) {
		var options = {
			app: this
		};
		this.controller = new AppController(options);
		this.router = new AppRouter(options);
		this.components = components;
		this.modules = modules;
		this.utils = utilities;
		this.localStorage = new entities.localStorage;

		// @DEBUG
		window.app = this;
	},
	onStart: function() {
		Backbone.history.start();
	}
});
