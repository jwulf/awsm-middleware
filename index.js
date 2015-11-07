module.exports = function (handlers) {
	var ware = require('ware');
	var middleware = ware();
	arguments.forEach(middleware.use);
	return middleware; 
}
