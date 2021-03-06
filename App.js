"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var router = express.Router();
        router.get('/guidedform/form/:id/workflow/:workflowId/', function (req, res, next) {
            var workflowId = req.params.workflowId;
            var action = req.params.action;
            console.log("workflowId:" + workflowId);
            console.log("action:" + action);
            res.redirect('/#/form/1/workflow/' + workflowId);
        });
        router.get('/guidedform/done/:id/workflow/:workflowId/', function (req, res, next) {
            var workflowId = req.params.workflowId;
            var action = req.params.action;
            var url = "http://localhost:8080/workflow/" + workflowId + "/done";
            res.redirect(url);
        });
        this.express.use('/', router);
        this.express.use('/data', express.static(__dirname + '/json'));
        this.express.use('/images', express.static(__dirname + '/img'));
        this.express.use('/', express.static(__dirname + '/angularSrc'));
    };
    return App;
}());
exports.App = App;
