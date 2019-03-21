"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const AddressSchema = new Schema({
    addLine1: {
        type: String,
        required: 'Address Line1 is Required.'
    },
    addLine2: {
        type: String
    },
    city: {
        type: String,
        required: 'City is Required.'
    },
    state: {
        type: String,
        required: 'State is Required.'
    },
    country: {
        type: String,
        required: 'Country is Required.'
    },
    pinCode: {
        type: String,
        required: 'Pin Code is Required.'
    }
});
exports.ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a First Name'
    },
    lastName: {
        type: String,
        required: 'Enter a Last Name'
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    phone: {
        type: String,
    },
    dob: {
        type: Date
    },
    primaryAddress: {
        type: AddressSchema,
        required: 'Primary Address is Required.'
    },
    secondaryAddresses: {
        type: [AddressSchema]
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});
exports.ContactSchema.plugin(uniqueValidator, { message: 'is already taken.' });
//# sourceMappingURL=contactModel.js.map