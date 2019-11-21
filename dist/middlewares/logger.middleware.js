"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("../environment/environment");
function logger(req, res, next) {
    if (!environment_1.e.production) {
        console.log(`Logger : ${req.method} ${req.path}`);
    }
    next();
}
exports.logger = logger;
