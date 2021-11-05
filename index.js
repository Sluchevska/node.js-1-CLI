const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
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

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts()
        .then(data => console.table(data))
        .catch(console.error);
      break;

    case 'get':
      getContactById(id)
        .then(contact => {
          if (contact) {
            console.table(contact);
          } else {
            console.log('Contact not found');
          }
        })
        .catch(console.error);
      break;

    case 'add':
      addContact(name, email, phone)
        .then(contacts => {
          console.table(contacts);
        })
        .catch(console.error);
      break;

    case 'remove':
      removeContact(id)
             break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
