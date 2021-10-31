const path = require('path');
const contactsPath = path.resolve('./db/contacts.json')
console.log(contactsPath)

const fs = require('fs')


function listContacts() {
   fs.readFile(contactsPath, 'utf8', (error, data) => {
    if (error) {
        console.log(error)
    }
    console.log(data)
}) 
}

function getContactById(contactId) {
 
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}


export {
    listContacts
}

