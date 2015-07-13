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
		"submitBtn": "button[type='submit']",
		"clearAllBtn": "button[type='button']"
	},
	events: {
		"submit": "onSubmit",
		"click @ui.clearAllBtn": "clearAll",
		"dblclick article": "removeClip"
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
	removeClip: function(e) {
		var key = e.currentTarget.getAttribute("data-key");
		this.model.unset(key);
		this.render(); 
	},
	clearAll: function() {
		this.model.clear();
		this.render();
	},
	template: function(model) {
		return _.template(templates.components["clipboard"])(model);
	}
});

