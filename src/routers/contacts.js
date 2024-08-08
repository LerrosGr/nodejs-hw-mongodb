import express from 'express';
import { Router } from 'express';
import {
  getContactsController,
  getContactsByIdController,
  deleteContactController,
  changeContactController,
  createContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

const jsonParse = express.json();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactsByIdController));

router.post('/contacts', jsonParse, ctrlWrapper(createContactController));

router.patch(
  '/contacts/:contactId',
  jsonParse,
  ctrlWrapper(changeContactController),
);
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default router;
