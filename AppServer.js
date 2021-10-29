"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var server = new App_1.App().express;
server.listen(process.env.PORT || 4200);
console.log('listening in port 4200');
