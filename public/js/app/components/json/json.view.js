/**
* JSON View
*/
var Marionette = require("marionette");
var templates = require("templates");
var _ = require("underscore");
var Backbone = require("backbone");

module.exports = Marionette.ItemView.extend({
	name: "json",
	type: "component",
	tagName: "ul",
	id: "json",
	className: "component",
	model: new Backbone.Model({
		name: "jkhkjh",
		age: 29
	}),
	initialize: function(options) {
		// @DEBUG
		console.log("JSON view initiailized");	
	},
	template: function(model) {
		return _.template(templates.components.json)(model);
	}
});

