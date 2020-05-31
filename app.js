const chalk = require('chalk')
const yargs = require('yargs')
const Note= require('./notes')

// //fs.writeFileSync('notes.txt','hello')

// fs.appendFileSync('notes.txt','helloooo')
// const getNotes= require('./notes')

// console.log(getNotes())

// console.log(chalk.green.bold('Success!'));


// const command = process.argv[2]

// if (command === 'add'){
//     console.log("we gonna add");
// }

//yargs- add, remove,read,lsit
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe: 'Body Content',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=>{
        Note.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
    },
    handler:(argv)=>{
        Note.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'List Notes',
    handler:()=>{
        Note.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'Read Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
    },
    handler:()=>{
        Note.readNote()
    }
})

yargs.parse();