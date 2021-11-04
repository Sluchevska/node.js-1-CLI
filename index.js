const path = require('path');
const contactsPath = path.resolve('./db/contacts.json')


const fs = require('fs').promises


async function listContacts() {
   
    try {
        const data = await fs.readFile(contactsPath, 'utf8')
        console.log(data)
        return JSON.parse(data)
    } catch (error) {
        return console.log(error)
    }
}

//  listContacts()

async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.filter((contact) => contact.id === Number(contactId))
    console.log(result)
    return result
}

getContactById(2)

async function removeContact(contactId) {
  try {
        const data = await fs.unlink('contactID', )
        console.log(data) 
    } catch (error) {
        console.log(error)
    }
}
// removeContact(2)

async function addContact(name, email, phone) {
 try {
        const NewContact = `${data} name email phone `
     await fs.writeFile(contactsPath,NewContact, 'utf8')
        console.log(data) 
    } catch (error) {
        console.log(error)
    }
}

// addContact(tess)


module.exports =  {
    listContacts,
    getContactById,
    removeContact,
    addContact
}

