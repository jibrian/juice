/**
* Clipboard View
*/
var LayoutViewPrototype = require("layoutview.prototype");
var Backbone = require("backbone");
var _ = require("underscore");
var templates = require("templates");

module.exports = LayoutViewPrototype.extend({
	id: "clipboard",
	className: "component",
	ui: {
		"clipsTitleInput": "#clipboard-title",
		"clipsTextarea": "#clipboard-clip",
		"submitBtn": "button[type='submit']"
	},
	events: {
		"submit": "onSubmit"
	},
	regions: {
		"clips": ".clips"
	},
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);
	},
	onSubmit: function(e) {
		e.preventDefault();
		this.model.set(this.ui.clipsTitleInput.val().trim(), this.ui.clipsTextarea.val().trim());
		this.render();
	},
	template: function(model) {
		return _.template(templates.components["clipboard"])(model);
	}
});

