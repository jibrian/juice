/**
* Templates
* An object with our html templates for easy access
*/
module.exports = {
	'components': {
		'adblock-parse': require('./../templates/components/adblock-parse.html'),
		'header': require('./../templates/components/header.html'),
		'json': require('./../templates/components/json.html'),
		'json-query': require('./../templates/components/json-query.html'),
		'juxtapose': require('./../templates/components/juxtapose.html'),
		'query-json': require('./../templates/components/query-json.html'),
		'redirect-trace': require('./../templates/components/redirect-trace.html'),
		'traces': require('./../templates/components/traces.html'),
		'traces-item': require('./../templates/components/traces.itemview.html'),
		'uri-dencoder': require('./../templates/components/uri-dencoder.html'),
		'clipboard': require('./../templates/components/clipboard.html'),
		'unix': require('./../templates/components/unix.html')
	},
	'modules': {
		'dashboard': require('./../templates/modules/dashboard.html')
	}
}
