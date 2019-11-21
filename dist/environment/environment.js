"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MODE;
(function (MODE) {
    MODE["DEV"] = "DEV";
    MODE["PROD"] = "PROD";
})(MODE || (MODE = {}));
exports.e = require("./env.json")[MODE.PROD];
