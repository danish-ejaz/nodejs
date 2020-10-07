const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter( (note) => note.title===title)
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!!!'))
    }else{
        console.log(chalk.red.inverse('Title already exist'))
    }   
}

const removeNote = (title) =>{
    const notes = loadNotes()
    const nodeToKeep = notes.filter((note) => note.title !== title)

    if(nodeToKeep.length === notes.length){
        console.log(chalk.red.inverse('No note found'))
    }else{
        saveNotes(nodeToKeep)
        console.log(chalk.green.inverse('Note removed!'))
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes : '))
    notes.forEach((note) => {
        console.log(note.title)
    });  
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse.italic(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.inverse.red('No note found!'))
    }
}

const saveNotes = (notes) =>{
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
}

const loadNotes = ()=>{
    try{
        const buffer = fs.readFileSync('notes.json')
        const dataJSON = buffer.toString()
        return JSON.parse(dataJSON)
    }catch(ex){
        return []
    }
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNotes : readNotes
}