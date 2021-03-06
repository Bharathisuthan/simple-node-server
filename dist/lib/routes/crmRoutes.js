"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
const mail_controller_1 = require("../controllers/mail.controller");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
        this.mailController = new mail_controller_1.MailController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        // Contact 
        app.route('/contact')
            .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                res.status(401).send({
                    msg: 'You shall not pass!',
                    requestFrom: req.originalUrl,
                    requestType: req.method,
                });
            }
            else {
                next();
            }
        }, this.contactController.getContacts)
            // POST endpoint
            .post(this.contactController.addNewContact);
        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
        app.route('/mail')
            .post(this.mailController.sendMail);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map