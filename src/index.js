'use strict';
var sliced = require('sliced');

module.exports = function or() {
	var args = sliced(arguments);
	var i = 0;
	return (function next(val) {
		if (!val && i < args.length) {
			return Promise.resolve(args[i++]).then(next);
		}
		return Promise.resolve(val);
	})(false);
};
