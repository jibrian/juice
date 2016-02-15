/**
* JSON View
*/
var ItemViewPrototype = require('itemview.prototype');
var templates = require('templates');
var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var moment = require('moment');

module.exports = ItemViewPrototype.extend({
	tagName: 'div',
	id: 'unix',
	className: 'component',
	ui: {
		'unixInput': 'input[name="unix"]',
		'formatSelector': 'select[name="format"]',
		'output': '.datetime'
	},
	events: {
		'submit': 'onSubmit' 
	},
	initialize: function(options) {
		// @see itemview.prototype
		this.inherit(options);

		window.moment = moment;
	},
	convertUnixToDatetime: function(unix, format) {
		var momentFormat;
	
		switch (format.toLowerCase()) {
			case 'iso':
				momentFormat = '';				
				break;
		}

		var processed = moment(parseInt(unix)).format(momentFormat);
		this.ui.output.html(processed);		
	},
	onSubmit: function(e) {
		e.preventDefault();
		var form = e.target.name;

		switch (form.toLowerCase()) {
			case 'unix-to-stamp':
				this.convertUnixToDatetime(this.ui.unixInput.val(), this.ui.formatSelector.val());		
				break;
		}	
	},
	template: function(model) {
		return _.template(templates.components.unix)(model);
	}
});
