const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Freeman.')

fs.appendFileSync('notes.txt', ' I am available at Maryland, Lagos.')