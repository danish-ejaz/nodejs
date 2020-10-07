// const fs = require('fs');
// //fs.writeFileSync('notes.txt','This file is created by Node.js');
// fs.appendFileSync('notes.txt',' And this is created inside Visual studio')
//const validator = require('validator')
//const getNotes = require('./utils.js')
//const message = getNotes()
//console.log(message)
//console.log(validator.isEmail('example.com'))

const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes.js')
//Create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title :{
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler (argv){
        notes.addNote(argv.title,argv.body)
    }
})

//Create remove command
yargs.command({
    command : 'remove',
    describe : 'Removing the note',
    builder :{
        title :{
            describe : 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command : 'list',
    describe : 'List all the notes',
    handler (){
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command : 'read',
    describe : 'Reading the note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler (argv){
        notes.readNotes(argv.title)
    }

})
yargs.parse()
