import { ContactsCollection } from '../models/contact.js';

const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

const createContact = async (contact) => {
  const createdContact = await ContactsCollection.create(contact);
  return createdContact;
};

const changeContact = async (contactId, contact) => {
  const changedContact = await ContactsCollection.findByIdAndUpdate(
    contactId,
    contact,
    {
      new: true,
    },
  );
  return changedContact;
};

const deleteContact = async (contactId) => {
  const deletedContact = await ContactsCollection.findByIdAndDelete(contactId);
  return deletedContact;
};

export {
  getAllContacts,
  getContactById,
  createContact,
  changeContact,
  deleteContact,
};
