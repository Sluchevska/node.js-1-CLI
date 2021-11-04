const {
        listContacts, getContactById, addContact, removeContact
} = require('./contacts');

const argv = require('yargs').argv;
    
// listContacts()
// getContactById(2)
// addContact('wonka', '23@gmail.com', '455874')
// removeContact('6e166c3d-23e7-4825-89bb-f1c2bdd9375d')

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // ...
      break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);