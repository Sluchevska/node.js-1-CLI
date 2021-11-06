const { Command } = require('commander');
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require('./contacts');

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case 'list':
        const contacts = await listContacts()
          console.table(contacts)
      
        break;

      case 'get':
        const contactById = await getContactById(id)
        if (contactById) {
          console.table(contactById)
        } else {
          console.log('Contact not found')
        }
         
        break;

      case 'add':
       const newContact =  await addContact(name, email, phone)
        console.table(newContact) 
        break;

      case 'remove':
        removeContact(id)
        break;

      default:
        console.warn('\x1B[31m Unknown action type!');
    }
    }catch (error) {
    console.log(error.message)
  
  }
  
}

invokeAction(argv);
