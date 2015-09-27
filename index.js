module.exports.Middleware = function () {
	var ware = require('ware');
	var middleware = ware()
		.use(function(event, context, cb, next){
			
		});
	 	
	return middleware; 
}();