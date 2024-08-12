import createHttpError from 'http-errors';
import {
  getAllContacts,
  getContactById,
  createContact,
  changeContact,
  deleteContact,
} from '../services/contacts.js';

async function getContactsController(req, res, next) {
  const contacts = await getAllContacts();

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
}

async function getContactsByIdController(req, res, next) {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  if (contact === null) {
    return next(createHttpError(404, 'Contact not found'));
  }
  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
}

async function createContactController(req, res, next) {
  const contact = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    isFavourite: req.body.isFavourite,
    contactType: req.body.contactType,
  };

  const createdContact = await createContact(contact);
  res.status(201).send({
    status: 201,
    message: 'Successfully created a contact!',
    data: createdContact,
  });
}

async function changeContactController(req, res, next) {
  const { contactId } = req.params;

  const contact = req.body;
  const result = await changeContact(contactId, contact);

  if (result === null) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }
  console.log(result);
  res.json({
    status: 200,
    message: `Successfully patched a student!`,
    data: result,
  });
}

async function deleteContactController(req, res, next) {
  const { contactId } = req.params;
  const contact = await deleteContact(contactId);

  if (contact === null) {
    return next(createHttpError(404, 'Contact not found'));
  }
  res.status(204).json();
}

export {
  getContactsController,
  getContactsByIdController,
  createContactController,
  changeContactController,
  deleteContactController,
};
