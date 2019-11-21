"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server
const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const Middleware = require("./middlewares");
const routes_1 = require("./routes/routes");
require("./controller/index");
const swagger = require('./swagger/swagger.json');
const app = express();
// Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', Middleware.logger, Middleware.auth);
// Headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
// Register Routes
routes_1.RegisterRoutes(app);
// Register Swagger Route
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swagger));
// Express Server
const server = app.listen(8080);
exports.server = server;
