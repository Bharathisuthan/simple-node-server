"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const contactRoutes_1 = require("./routes/contactRoutes");
class App {
    constructor() {
        this.mongoUrl = 'mongodb+srv://devteam:devteam123@cluster0-tifgc.mongodb.net/test?retryWrites=true';
        this.routePrv = new contactRoutes_1.ContactRoutes();
        this.app = express();
        this.config();
        this.routePrv.Routes(this.app);
        this.mongoSetup();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // Serving static files
        this.app.use(express.static('public'));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        // mongoose.connect(this.mongoUrl);
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map