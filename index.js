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
   await fs.writeFile(contactsPath, JSON.stringify(result, null, contactId))
  console.log(result);
  return result;
}
// removeContact(8);

async function addContact(name, email, phone) {
 
    const NewContact = `${data} name email phone `;
    await fs.writeFile(contactsPath, NewContact, 'utf8');
    console.log(data);
  
}

// addContact(tess)

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
