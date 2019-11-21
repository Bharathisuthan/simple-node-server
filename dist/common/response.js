"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTP_STATUS = require("http-status");
class APIResponse {
    constructor() { }
    success(code, successMessage, data) {
        const res = {
            statusCode: HTTP_STATUS[code],
            isSuccess: true,
            successMessage: successMessage || 'Success.',
            resultObject: data,
        };
        return new CustomResponseImpl(res);
    }
    error(code, errorMessage, errorDetail) {
        const err = {
            statusCode: HTTP_STATUS[code],
            isSuccess: false,
            errorMessage: errorMessage || 'Something went wrong.',
            errorDetail: errorDetail || errorMessage,
        };
        return new CustomResponseImpl(err);
    }
}
exports.APIResponse = APIResponse;
class CustomResponseImpl {
    constructor(args) {
        this.statusCode = args.statusCode || 0;
        this.isSuccess = args.isSuccess || false;
        this.successMessage = args.successMessage || null;
        this.errorMessage = args.errorMessage || null;
        this.errorDetail = args.errorDetail || null;
        this.resultObject = args.resultObject || null;
    }
}
