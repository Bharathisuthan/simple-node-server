"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ContactSchema = new Schema({
    id: {
        type: Schema.ObjectId
    },
    firstName: {
        type: String,
        required: 'Enter a First Name'
    },
    lastName: {
        type: String,
        required: 'Enter a Last Name'
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
}, {
    _id: false
});
//# sourceMappingURL=contactModel.js.map