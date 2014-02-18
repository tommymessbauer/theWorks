var createFactory = require('./lib/factory');

module.exports.factory = {
	'build': createFactory(),
	'createBuilder': createFactory,
	'defaultPluginRetrievers': require('./lib/pluginRetrievers')
}

var configmasticator = require('./lib/configmasticator');

module.exports.config = {
	'overlay' : configmasticator.overlay,
	'trimout' : configmasticator.trimout
};