module.exports = function (handlers) {
	var ware = require('ware');
	var middleware = ware();
	
	for (var m in arguments) {
		middleware.use(arguments[m]);
	}
	
	return middleware; 
}
