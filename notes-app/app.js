const chalk = require('chalk')
const validator = require('validator')
const getNotes = require('./notes.js')
const yargs = require('yargs')


// Customize yargs

yargs.version('1.1.0')

// add, remove, read, list

// Create an Add command!

yargs.command({
    'command' : 'add',
    'describe' : 'Add new note!',
    'builder' : {
        'title' :{

            'describe' : 'Note title',
            demandOption : true,
            type : 'string'

        },

        'body' :{

            'describe' : 'Note body',
            demandOption : true,
            type : 'string'

        }

    },
    handler : function (argv){
        console.log('Title: '+argv.title)
        console.log('Body: '+argv.body)
    }
})

// Create remove command

yargs.command({
    'command' : 'remove',
    'describe' : 'Removing a note!',
    handler : function (){
        console.log('Removing a note!')
    }
})

// Create read command

yargs.command({
    'command' : 'read',
    'describe' : 'read a note!',
    handler : function (){
        console.log('Read a note!')
    }
})

// Create list command

yargs.command({
    'command' : 'list',
    'describe' : 'List all notes!',
    handler : function (){
        console.log('List all notes!')
    }
})


console.log(yargs.argv)