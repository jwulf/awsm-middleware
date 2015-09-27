# awsm-middleware
Middleware for your JAWS project, based on segment.io

Here's how you use it in your `handler.js`:

```
'use strict';

/**
 * AWS Module: Action: Lambda Handler
 * "Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent"
 */

require('../../jaws-core-js/env');
var Middleware = require('../../middleware');

// now require all other middleware-enabled modules

// Modularized Code
var action = require('./index.js');

// if the lambda function is Middleware-aware, inject the Middleware object
if (action.Middleware) action.Middleware = Middleware;

// Lambda Handler
module.exports.handler = function (event, context) {
  Middleware.run(event, context, function (err, event, context) {
    action.run(event, context, function(error, result) {
      return context.done(error, result);
    });  
  });
}
```