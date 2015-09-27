module.exports = function (handlers) {
	var ware = require('ware');
	var middleware = ware();
	for(var i = 0; i < arguments.length; i++) {
  		middleware.use(arguments[i]);
	}	
	return middleware; 
}