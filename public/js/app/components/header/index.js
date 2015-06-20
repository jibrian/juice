/**
* Header Component
*/
define(["header.controller", "header.view"], 
	function(HeaderController, HeaderView) {
		return {
			Controller: HeaderController,
			View: HeaderView
		}
	}
); // !define