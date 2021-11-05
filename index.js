const {
        listContacts, getContactById, addContact, removeContact
} = require('./contacts');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();
    
// listContacts()
// getContactById(2)
// addContact('wonka', '23@gmail.com', '455874')
// removeContact('6e166c3d-23e7-4825-89bb-f1c2bdd9375d')

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      return listContacts()
      //   .then((data) => console.table(data))
      // .catch(console.error)
      break;

    case 'get':
      return getContactById(id)
      break;

    case 'add':
      return addContact( name, email, phone)
      break;

    case 'remove':
      return removeContact(id)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);