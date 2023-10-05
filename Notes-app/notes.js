const fs = require('fs')
const chalk = require('chalk')

const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNote = notes.find(function (note) {
        return note.title == title
    })

    if (!duplicateNote) {
        notes.push({ title, body })
        saveNotes(notes)

        console.log(chalk.green.inverse('Note Added'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()

    const updatedNotes = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > updatedNotes.length) {
        saveNotes(updatedNotes)


        console.log(chalk.green.inverse('Note Removed'))
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

const listNotes = function () {
    const notes = loadNotes()

    notes.forEach(function (note) {
        console.log(note.title)
    })
}

const readNote = function (title) {
    const notes = loadNotes()

    const note = notes.find(function (note) {
        return note.title === title
    })

    if (note) {
        console.log(chalk.italic(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

const loadNotes = function () {
    try {
        const buffer = fs.readFileSync('notes.json')
        const string = buffer.toString()
        return JSON.parse(string)
    } catch (error) {
        return []
    }
} 

const saveNotes = function (notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}