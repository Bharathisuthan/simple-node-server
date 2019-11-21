"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
let AMSController = class AMSController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.res = new response_1.APIResponse();
    }
    amsResponse() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.res.success('OK', 'AMS Application Starts');
            }
            catch (error) {
                return this.res.error('EXPECTATION_FAILED', 'Failed', error);
            }
        });
    }
};
__decorate([
    tsoa_1.Get('')
], AMSController.prototype, "amsResponse", null);
AMSController = __decorate([
    tsoa_1.Tags('AMS'),
    tsoa_1.Route('')
], AMSController);
exports.AMSController = AMSController;
