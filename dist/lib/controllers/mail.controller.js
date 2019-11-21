"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
class MailController {
    sendMail(req, res) {
        const mail = req.body;
        try {
            return utils_1.Mailer(mail).then((res) => {
                if (!res)
                    res.send(res.error);
                else
                    res.json(res);
            }).catch((err) => {
                res.send(err);
            });
        }
        catch (error) {
            res.send(error);
        }
    }
}
exports.MailController = MailController;
//# sourceMappingURL=mail.controller.js.map