const chalk = require('chalk')

const getNotes = require('./notes')

const msg = getNotes()

console.log(chalk.underline.blue.bold('Success!'))