/**
 * Traces Collection
 */
var Backbone = require("backbone");
var $ = require("jquery");

module.exports = Backbone.Collection.extend({
	urlRoot: "redirect-trace.php",
	/**
	* Request url headers from API and populate model with its data
	* @param {string} url Url path provided by redirect trace form 
	*/
	fetchByUrl: function(url) {
		var _this = this;
		return $.ajax({
			url: _this.urlRoot,
			dataType: 'json',
			method: 'GET',
			data: {
				url: url
			},
			success: function(response) {
				_this.add(response);
			}
		});
	}
});