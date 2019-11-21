"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 3000;
/* https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
}); */
app_1.default.listen(8080, () => {
    console.log('Express server listening on port ' + 8080);
});
//# sourceMappingURL=server.js.map