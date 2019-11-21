"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const environment_1 = require("../environment/environment");
AWS.config.update({
    accessKeyId: environment_1.e.aws.accessKeyId,
    secretAccessKey: environment_1.e.aws.secretAccessKey,
    region: environment_1.e.aws.region
});
const s3 = new AWS.S3();
const fileUpload = multer({
    storage: multerS3({
        s3: s3,
        bucket: environment_1.e.aws.bucket,
        acl: environment_1.e.aws.permission,
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
        key: (req, file, cb) => {
            cb(null, Date.now().toString());
        }
    })
});
exports.upload = fileUpload.single('dp');
