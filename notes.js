const fs=require('fs');
const chalk = require('chalk')

const addNote=(title,body)=>{
    const notes=loadNotes();
    const duplicateNote=notes.find(note=>note.title == title)

    if (duplicateNote){
        console.log("Error:Duplicate Title")
        return 
    }
    notes.push({
        title:title,
        body:body
    })

    saveNotes(notes)
    console.log(chalk.green.inverse('Note Added'))
}


const saveNotes=(notes)=>{
    const jsonNote= JSON.stringify(notes)
    fs.writeFileSync('notes.json', jsonNote)
}

const removeNote=(title)=>{
    const notes=loadNotes();
    const newNotes= notes.filter(note=> note.title != title)
    if (newNotes.length===notes.length){
       return console.log(chalk.red.inverse('Title not found'));
    }
    saveNotes(newNotes)
    console.log(chalk.green.inverse(title+ " was deleted"));
}

const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString());
    }catch(e){
        return []
    }
}

const listNotes=()=>{
    console.log(chalk.green.bold("List of Notes"))
    const notes=loadNotes()
    notes.forEach(note => console.log(note.title));
}

const readNote=(title)=>{
    const notes=loadNotes();
    const note =notes.find(note=>notes.title == title)
    if(note){
        console.log("Title : "+ note.title)
        console.log(note.body)
        return
    }
    console.log("Note does not exist");
}

module.exports={
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}