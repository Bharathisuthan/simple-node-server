"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contactController_1 = require("../controllers/contactController");
class ContactRoutes {
    constructor() {
        this.contactController = new contactController_1.ContactController();
    }
    Routes(app) {
        app.route('/api/')
            .get((req, res) => {
            res.status(200).send({ message: 'Get request Successfull!' });
        });
        app.route('/api/contact')
            .get(this.contactController.getContacts)
            .post(this.contactController.addContact);
        app.route('/api/contact/:contactId')
            .get(this.contactController.getContactById)
            .put(this.contactController.updateContact)
            .delete(this.contactController.removeContact);
    }
}
exports.ContactRoutes = ContactRoutes;
//# sourceMappingURL=contactRoutes.js.map