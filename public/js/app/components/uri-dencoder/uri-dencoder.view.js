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
		this.appendURI(encodeURIComponent(this.ui.uriTextarea.val()));
	},
	decodeURI: function() {
		this.appendURI(decodeURIComponent(this.ui.uriTextarea.val()));
	},
	appendURI: function(uri) {
		var p = document.createElement("p");
		var text = document.createTextNode(uri);
		p.appendChild(text);

		this.$el.find(".processed-uri").empty().append(p);
	},
	template: function() {
		return templates.components["uri-dencoder"];
	}
});

