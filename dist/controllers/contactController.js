"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const contactModel_1 = require("../models/contactModel");
var objectID = require('mongodb').ObjectID;
const Contact = mongoose.model('contact', contactModel_1.ContactSchema);
class ContactController {
    getContacts(req, res) {
        Contact.find({}, (err, contacts) => {
            if (err) {
                // res.status(400).send(err);
                res.status(400).json({ isSuccess: false, resultObject: null, successMessage: null, errorMessage: 'Unable to gets contacts.', errorDetail: err });
            }
            else {
                // res.json(contacts);
                res.json({ isSuccess: true, resultObject: contacts, successMessage: 'Contacts retrieved successfully.', errorMessage: null, errorDetail: null });
            }
        });
    }
    addContact(req, res) {
        let newContact = new Contact(req.body);
        newContact.save((err, contact) => {
            if (err) {
                // res.status(400).send(err);
                res.status(400).json({ isSuccess: false, resultObject: null, successMessage: null, errorMessage: 'Unable save contact.', errorDetail: err });
            }
            else {
                // res.json(contacts);
                res.json({ isSuccess: true, resultObject: contact, successMessage: 'Contact successfully saved.', errorMessage: null, errorDetail: null });
            }
        });
    }
    updateContact(req, res) {
        if (objectID.isValid(req.params.contactId)) {
            Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
                if (err) {
                    // res.status(400).send(err);
                    res.status(400).json({ isSuccess: false, resultObject: null, successMessage: null, errorMessage: 'Unable to update contact.', errorDetail: err });
                }
                else {
                    // res.json(contacts);
                    res.json({ isSuccess: true, resultObject: contact, successMessage: 'Contacts updated successfully.', errorMessage: null, errorDetail: null });
                }
            });
        }
        else {
            res.status(400).send({ isSuccess: false, resultObject: null, successMessage: null, errorMessage: 'Invalid contact id: ' + req.params.contactId, errorDetail: 'Invalid contact id: ' + req.params.contactId });
        }
    }
    getContactById(req, res) {
        if (objectID.isValid(req.params.contactId)) {
            Contact.findById(req.params.contactId, (err, contact) => {
                if (!contact) {
                    // res.status(400).send(err);
                    res.status(400).json({ isSuccess: false, resultObject: null, successMessage: null, errorMessage: 'Contact not found.', errorDetail: err });
                }
                else {
                    res.json({ isSuccess: true, resultObject: contact, successMessage: 'Contacts retrieved successfully.', errorMessage: null, errorDetail: null });
                }
            });
        }
        else {
            res.status(400).send({ isSuccess: false, resultObject: null, successMessage: null, errorMessage: 'Invalid contact id: ' + req.params.contactId, errorDetail: 'Invalid contact id: ' + req.params.contactId });
        }
    }
    removeContact(req, res) {
        if (objectID.isValid(req.params.contactId)) {
            Contact.remove({ _id: req.params.contactId }, (err) => {
                if (err) {
                    // res.status(400).send(err);
                    res.status(400).json({ isSuccess: false, resultObject: null, successMessage: null, errorMessage: 'Contact not found.', errorDetail: err });
                }
                else {
                    res.json({ isSuccess: true, resultObject: null, successMessage: 'Contacts removed successfully.', errorMessage: null, errorDetail: null });
                }
            });
        }
        else {
            res.status(400).send({ isSuccess: false, resultObject: null, successMessage: null, errorMessage: 'Invalid contact id: ' + req.params.contactId, errorDetail: 'Invalid contact id: ' + req.params.contactId });
        }
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=contactController.js.map