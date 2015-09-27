# awsm-middleware
Middleware for your JAWS project, based on segment.io

Here's how you use it in your `handler.js`:

```
var Authorization = require('../../users').Authorization;
var Logging = require('../../loggly').Logging;

var Middleware = require('../../middleware')(Authorization, Logging);

// Modularized Code
var action = require('./index.js');

// Lambda Handler
module.exports.handler = function (event, context) {
  Middleware.run(event, context, function (err, event, context) {
    action.run(event, context, function(error, result) {
      return context.done(error, result);
    });  
  });
}
```

Here's how you implement a middleware function:

```
module.exports.myMiddleWareFunction = function (event, context, next){
  // Do your thing - decorate, decide, whatever
  if (we.want.to.fail) { return context.fail('Nope!'); }  
  if (we.want.to.keep.going) { next(); }
}

```
