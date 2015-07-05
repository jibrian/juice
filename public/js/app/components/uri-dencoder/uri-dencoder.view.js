/**
* URI Dencoder Controller
*/
var LayoutViewPrototype = require("layoutview.prototype");
var Backbone = require("backbone");
var templates = require("templates");

module.exports = LayoutViewPrototype.extend({
	tagName: "div",
	id: "uri-dencoder",
	className: "component",
	ui: {
		"uriTextarea": "#uri-string",
		"encodeBtn": "button[name='encode']",
		"decodeBtn": "button[name='decode']"
	},
	events: {
		"click @ui.encodeBtn": "encodeURI",
		"click @ui.decodeBtn": "decodeURI"
	},
	regions: {
		"uri": ".process-uri"
	},
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);
	},
	encodeURI: function() {
		var processedURI = encodeURIComponent(this.ui.uriTextarea.val());
		this.$el.find(".processed-uri").append(processedURI);
	},
	decodeURI: function() {
		var processedURI = decodeURIComponent(this.ui.uriTextarea.val());
		this.$el.find(".processed-uri").append(processedURI);
	},
	template: function() {
		return templates.components["uri-dencoder"];
	}
});

