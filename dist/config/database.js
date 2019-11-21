"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.mongoose = mongoose;
const environment_1 = require("../environment/environment");
const options = {
    user: environment_1.e.db.user,
    pass: environment_1.e.db.pass,
    useNewUrlParser: true,
    useCreateIndex: true,
    auto_reconnect: true,
    useFindAndModify: false,
    reconnectTries: 4
};
mongoose.connect(environment_1.e.db.uri, options, (error) => {
    if (!error) {
        console.log('MongoDB connection succeeded.');
    }
    else {
        console.log('Error in MongoDB connection : ' + JSON.stringify(error, undefined, 2));
    }
});
