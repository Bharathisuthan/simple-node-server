"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require('request');
const authkey = 'YzhlNzhhZjQxM2Q';
const senderId = 'RNDSMS';
const type = '1';
const route = '2';
function RoundSms(sms) {
    const url = `http://roundsms.com/api/sendhttp.php?authkey=${authkey}&mobiles=${sms.to}&message=${sms.message}&sender=${senderId}&type=${type}&route=${route}`;
    return new Promise((resolve, reject) => {
        request(url, { json: true }, (err, res, body) => {
            if (err)
                reject(err);
            resolve(body);
        });
    });
}
exports.RoundSms = RoundSms;
