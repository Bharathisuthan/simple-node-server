"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function auth(req, res, next) {
    if (req.headers && (req.headers.authorization === 'Bearer asdfghjkl' || req.headers.referer === 'http://localhost:3000/swagger/')) {
        next();
    }
    else {
        res.status(401).send('Unauthorized access!');
    }
}
exports.auth = auth;
