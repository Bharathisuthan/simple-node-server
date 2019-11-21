"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../models/index");
const tsoa_1 = require("tsoa");
const response_1 = require("../common/response");
const sha256 = require("sha256");
const utils_1 = require("../utils");
let UserController = class UserController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.res = new response_1.APIResponse();
    }
    // Get Users
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(JSON.stringify(header));
            try {
                let allUsers = yield index_1.UserSchema.find();
                return this.res.success('OK', 'Success Message', allUsers);
            }
            catch (error) {
                return this.res.error('EXPECTATION_FAILED', 'Exception', error);
            }
        });
    }
    // Get Users By User Id
    getUserByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield index_1.UserSchema.findOne({ _id: id });
                return this.res.success('OK', 'Success', user);
            }
            catch (error) {
                return this.res.error('EXPECTATION_FAILED', 'Exception', error);
            }
        });
    }
    // Authenticate User
    authenticate(reqBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = yield index_1.UserSchema.findOne({ email: reqBody.email });
                if (user) {
                    if (user.password === sha256(reqBody.password)) {
                        user['password'] = null;
                        const textContent = {
                            body: `Authentication Successfull`,
                            to: `+91${user.mob}`,
                            from: "+19123870748"
                        };
                        utils_1.twilio.messages.create(textContent)
                            .then((message) => { })
                            .catch((error) => console.log(error));
                        return this.res.success('OK', 'Success', user);
                    }
                    else {
                        return this.res.error('EXPECTATION_FAILED', 'Incorrect Password');
                    }
                }
                else {
                    return this.res.error('EXPECTATION_FAILED', 'Incorrect Username');
                }
            }
            catch (error) {
                return this.res.error('EXPECTATION_FAILED', 'Exception', error);
            }
        });
    }
    // Create User
    createuser(reqBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let email = yield index_1.UserSchema.findOne({ email: reqBody.email });
                if (email) {
                    return this.res.error('OK', `Email ${reqBody.email} is already taken`);
                }
                else {
                    let mobile = yield index_1.UserSchema.findOne({ mob: reqBody.mob });
                    if (mobile) {
                        return this.res.error('OK', `Mobile Number ${reqBody.mob} is already used`);
                    }
                    else {
                        reqBody.password = sha256(reqBody.password);
                        let createUser = yield index_1.UserSchema.create(reqBody);
                        createUser['password'] = null;
                        return this.res.success('CREATED', 'Successfully created.', createUser);
                    }
                }
            }
            catch (error) {
                return this.res.error('EXPECTATION_FAILED', 'Unable to create.', error);
            }
        });
    }
    // Update User By ID
    updateUser(id, reqBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (reqBody.password) {
                    reqBody.password = sha256(reqBody.password);
                }
                let updateUser = yield index_1.UserSchema.findOneAndUpdate(id, reqBody, { new: true });
                if (updateUser) {
                    updateUser['password'] = null;
                    return this.res.success('OK', 'Success Message', updateUser);
                }
                else {
                    return this.res.error('NOT_FOUND', `No User in the following ID: ${id}`);
                }
            }
            catch (error) {
                return this.res.error('EXPECTATION_FAILED', `Error on Update User by ID ${id}`, error);
            }
        });
    }
    // Upload Display Picture
    uploadDP(id, reqBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                utils_1.upload(reqBody, (error, some) => __awaiter(this, void 0, void 0, function* () {
                    if (error) {
                        this.res.error('EXPECTATION_FAILED', 'Upload Failed', error);
                    }
                    else {
                        console.error(reqBody);
                        const setDP = { $set: { "displayPicture": "reqBody.file.location" } };
                        let dp = yield index_1.UserSchema.findOneAndUpdate(id, setDP, { new: true });
                        if (dp) {
                            dp['password'] = null;
                            this.res.success('OK', 'Success', dp);
                        }
                    }
                }));
            }
            catch (error) {
                return this.res.error('EXPECTATION_FAILED', 'Exception', error);
            }
        });
    }
};
__decorate([
    tsoa_1.Get('')
], UserController.prototype, "getAllUsers", null);
__decorate([
    tsoa_1.Get('/{id}'),
    __param(0, tsoa_1.Path('id'))
], UserController.prototype, "getUserByUserId", null);
__decorate([
    tsoa_1.Post('/auth'),
    __param(0, tsoa_1.Body())
], UserController.prototype, "authenticate", null);
__decorate([
    tsoa_1.Post('/'),
    __param(0, tsoa_1.Body())
], UserController.prototype, "createuser", null);
__decorate([
    tsoa_1.Put('/{id}'),
    __param(0, tsoa_1.Path('id')), __param(1, tsoa_1.Body())
], UserController.prototype, "updateUser", null);
__decorate([
    tsoa_1.Post('/upload/{id}'),
    __param(0, tsoa_1.Path('id')), __param(1, tsoa_1.Body())
], UserController.prototype, "uploadDP", null);
UserController = __decorate([
    tsoa_1.Tags('User'),
    tsoa_1.Route('/api/user')
], UserController);
exports.UserController = UserController;
