const { v4: uuidv4 } = require('uuid');

const path = require('path');
const contactsPath = path.resolve('./db/contacts.json');

const fs = require('fs').promises;

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    console.log(data);
    return JSON.parse(data);
  } catch (error) {
    return console.log(error);
  }
}

//  listContacts()

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.filter(contact => contact.id === Number(contactId));
  console.log(result);
  return result;
}

// getContactById(2)

async function removeContact(contactId) {
  const contacts = await listContacts();
  const result = contacts.filter(contact => contact.id !== Number(contactId));
  await fs.writeFile(contactsPath, JSON.stringify(result, null, contactId));
  console.log(result);
  return result;
}
// removeContact(8);

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: uuidv4(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, newContact));
  console.log(newContact);
  return newContact;
}

// addContact('tess','2@mail.com','25555')

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
