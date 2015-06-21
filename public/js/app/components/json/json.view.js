/**
* JSON View
*/
var Marionette = require("marionette");
var templates = require("templates");
var _ = require("underscore");
var Backbone = require("backbone");

module.exports = Marionette.ItemView.extend({
	tagName: "ul",
	id: "json",
	className: "component",
	initialize: function(options) {
		this.model = new Backbone.Model({
			name: "brian",
			age: 29
		});


		// @DEBUG
		console.log("JSON view initiailized");	
	},
	onBeforeRender: function() {
		var test = _.template(templates.components.json);
		this.template = test(this.model.toJSON())
		

		console.log(this.template);
	},
	template: templates.components.json
	
});

