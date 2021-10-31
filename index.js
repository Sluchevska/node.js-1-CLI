const path = require('path');
const contactsPath = path.resolve('./db/contacts.json')


const fs = require('fs').promises


async function listContacts() {
   
    try {
        const data = await fs.readFile(contactsPath, 'utf8')
        console.log(data) 
    } catch (error) {
        console.log(error)
    }
}
//  listContacts()

function getContactById(contactId) {
 
}

// async function removeContact(contactId) {
//   try {
//         const data = await fs.unlink()
//         console.log(data) 
//     } catch (error) {
//         console.log(error)
//     }
// }
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


// export {
//     listContacts,
//     getContactById,
//     removeContact,
//     addContact
// }

