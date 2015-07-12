/**
* Browser Local Storage Model
*/
var Backbone = require("backbone");

var ViewStateModel = Backbone.Model.extend({
	defaults: function() {
		return {
			"juxtaposeOne": "",
			"juxtaposeTwo": ""
		}
	},
});

module.exports = ViewStateModel