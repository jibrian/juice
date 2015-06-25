/**
* Templates
* An object with our html templates for easy access
*/
module.exports = {
	"components": {
		"adblock": require("./../templates/components/adblock.html"),
		"header": require("./../templates/components/header.html"),
		"json": require("./../templates/components/json.html"),
		"query-json": require("./../templates/components/query-json.html"),
		"redirect-trace": require("./../templates/components/redirect-trace.html"),
		"easylist": require("./../../../assets/txt/easylist.html")
	},
	"modules": {
		"dashboard": require("./../templates/modules/dashboard.html")
	}
}