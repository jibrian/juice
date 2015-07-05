/**
* Redirect-Trace View
*/
var LayoutViewPrototype = require("layoutview.prototype");
var Backbone = require("backbone");
var $ = require("jquery");
var entities = require("entities");
var templates = require("templates");

module.exports = LayoutViewPrototype.extend({
	id: "redirect-trace",
	className: "component",
	ui: {
		"urlTextarea": "#url-textarea",
		"submitBtn": "form[name='redirect-trace'] button[type='submit']"
	},
	events: {
		"submit": "requestRedirects"
	},
	regions: {
		"traces": ".traces"
	},
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);
	},
	/**
	* Instantiates trace model and request redirects from API
	* After model has populated, load into our app
	* @param {object} e Event object
	*/
	requestRedirects: function(e) {
		e.preventDefault();
		var _this = this;
		var traceModel = new entities.components.traces;
		// @see trace.model
		traceModel.fetchByUrl(_this.ui.urlTextarea.val()).then(function() {
			_this.loadTrace(traceModel);
		})
	},
	/**
	* Load Trace component with populated Backbone model
	* @param {object} model Backbone model 
	*/
	loadTrace: function(model) {
		// @see controller.prototype
		this.controller.import(["traces"], ["traces"], {
			app: this.app
		}, {
			model: model
		});
	},
	/**
	* @param {object} e Event object
	*/
	fetchTraces: function(e) {
		e.preventDefault();
		var _this = this;
		this.model.fetchByUrl(this.ui.urlTextarea.val());
	},	
	template: function() {
		return templates.components["redirect-trace"];
	}
});

