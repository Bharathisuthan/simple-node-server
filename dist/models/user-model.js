"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: { type: mongoose_1.Schema.Types.ObjectId },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    password: { type: String, required: true },
    roleId: { type: Number, required: true },
    orgId: { type: Number, required: true },
    branchId: { type: Number, required: true },
    mob: { type: String, required: true },
    altMob: { type: String },
    email: { type: String, required: true },
    displayPic: { type: String },
    sessionDetails: { type: Object },
    authDetails: { type: Object },
    notify: { type: Object },
    createdOn: { type: Date, default: Date.now },
    createdBy: { type: Number },
    updatedOn: { type: Date, default: Date.now },
    updatedBy: { type: Number }
});
exports.UserSchema = database_1.mongoose.model('user_list', schema);
