"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
// import * as https from 'https';
// import * as fs from 'fs';
const port = process.env.PORT || 8080;
app_1.default.listen(port, () => {
    console.log('Express Server listening on port : ' + port);
});
//# sourceMappingURL=server.js.map