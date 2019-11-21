"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Twilio = require("twilio");
const environment_1 = require("../environment/environment");
exports.twilio = Twilio(environment_1.e.twilio.sid, environment_1.e.twilio.authToken);
