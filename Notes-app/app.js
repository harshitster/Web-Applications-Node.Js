const yargs = require('yargs')
const notes = require('./notes.js')

yargs.parse()

yargs.command({
    command: 'add',
    describe: 'Add a Note',
    builder: {
        title: {
           describe: 'Note Title',
           demandOption: true,
           type: 'string' 
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all Notes',
    handler: function (argv) {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, 
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }   
})

yargs.parse()