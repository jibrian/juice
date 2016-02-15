/**
* Redirect-Trace View
*/
var LayoutViewPrototype = require('layoutview.prototype');
var Backbone = require('backbone');
var $ = require('jquery');
var entities = require('entities');
var templates = require('templates');

module.exports = LayoutViewPrototype.extend({
	id: 'redirect-trace',
	className: 'component',
	ui: {
		'urlTextarea': '#url-textarea',
		'submitBtn': 'form[name="redirect-trace"] button[type="submit"]',
		'clearBtn': 'button[name="clear"]'
	},
	events: {
		'submit': 'requestRedirects',
		'click @ui.clearBtn': 'clearInput'
	},
	regions: {
		'traces': '.traces'
	},
	initialize: function(options) {
		// @see layoutview.prototype
		this.inherit(options);
		// @see controller.prototype
		this.controller.import(['traces'], ['traces'], {
			app: this.app
		}, {
			collection: new entities.components.traces
		});
	},
	clearInput: function() {
		this.ui.urlTextarea.val('');
	},
	/**
	 * Instantiates trace model and request redirects from API
	 * After model has populated, load into our app
	 * @param {object} e Event object
	 */
	requestRedirects: function(e) {
		if (e) {
			e.preventDefault();
		}

		this.app.vent.trigger('traces:add', this.ui.urlTextarea.val());
		this.app.controller.view.model.set('redirect-trace', this.ui.urlTextarea.val());
	},
	/**
	 * @param {object} e Event object
	 */
	fetchTraces: function(e) {
		e.preventDefault();
		var _this = this;
		this.model.fetchByUrl(this.ui.urlTextarea.val());
	},	
	onRender: function() {
		if (this.app.controller.view.model.get('redirect-trace')) {
			this.ui.urlTextarea.val(this.app.controller.view.model.get('redirect-trace'));
		}
	},
	template: function() {
		return templates.components['redirect-trace'];
	}
});

