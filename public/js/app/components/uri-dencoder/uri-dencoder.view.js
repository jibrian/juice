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
		"decodeBtn": "button[name='decode']",
		"clearBtn": "button[name='clear']"
	},
	events: {
		"click @ui.encodeBtn": "encodeURI",
		"click @ui.decodeBtn": "decodeURI",
		"click @ui.clearBtn": "clearInput"
	},
	regions: {
		"uri": ".process-uri"
	},
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);
	},
	clearInput: function() {
		this.ui.uriTextarea.val("");
	},
	encodeURI: function() {
		var encoded = encodeURIComponent(this.ui.uriTextarea.val());
		this.appendURI(encoded);
		this.app.controller.view.model.set({
			"uri-dencoder": this.ui.uriTextarea.val(),
			"uri-dencoder-output": encoded
		});
	},
	decodeURI: function() {
		var decoded = decodeURIComponent(this.ui.uriTextarea.val());
		this.appendURI(decoded);
		this.app.controller.view.model.set({
			"uri-dencoder": this.ui.uriTextarea.val(),
			"uri-dencoder-output": decoded
		});
	},
	appendURI: function(uri) {
		var p = document.createElement("p");
		var text = document.createTextNode(uri);
		p.appendChild(text);
		this.$el.find(".processed-uri").empty().append(p);
	},
	onRender: function() {
		if (this.app.controller.view.model.get("uri-dencoder")) {
			this.ui.uriTextarea.val(this.app.controller.view.model.get("uri-dencoder"));
			this.appendURI(this.app.controller.view.model.get("uri-dencoder-output"));
		}
	},
	template: function() {
		return templates.components["uri-dencoder"];
	}
});

