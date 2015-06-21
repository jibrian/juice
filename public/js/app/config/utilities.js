/**
* Utilities
* Helper functions 
*/
module.exports = {
	/**
	* @param {string} type
	* Checks whether type matches component or module and returns
	*   processed string for use in our app. Improves readiability
	*/
	processType: function(type) {
		var processedType;
		
		if (type.match("component")) {
			processedType = "components";
		} else if (type.match("module")) {
			processedType = "modules";
		}

		return processedType;
	}
}