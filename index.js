const path = require('path');
const contactsPath = path.resolve('./db/contacts.json')
console.log(contactsPath)

const fs = require('fs')
fs.readFile(contactsPath, 'utf8', (error, data) => {
    if (error) {
        console.log(error)
    }
    console.log(data)
})

