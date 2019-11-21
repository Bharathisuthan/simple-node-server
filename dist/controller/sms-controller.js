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
const tsoa_1 = require("tsoa");
const response_1 = require("../common/response");
const utils_1 = require("../utils");
let SmsController = class SmsController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.res = new response_1.APIResponse();
    }
    sendSms(sms) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return utils_1.RoundSms(sms).then((res) => {
                    if (res && res.error)
                        return this.res.error('BAD_REQUEST', res.error, res);
                    else
                        return this.res.success('OK', 'Success.', res);
                }).catch((err) => {
                    return this.res.error('BAD_REQUEST', 'Something went wrong, Plz try after some time.', err);
                });
            }
            catch (error) {
                return this.res.error('BAD_REQUEST', 'Something went wrong, Plz try after some time.', error);
            }
        });
    }
};
__decorate([
    tsoa_1.Post(''),
    __param(0, tsoa_1.Body())
], SmsController.prototype, "sendSms", null);
SmsController = __decorate([
    tsoa_1.Tags('SMS'),
    tsoa_1.Route('/api/sms')
], SmsController);
exports.SmsController = SmsController;
