const fs = require('fs')

/*
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log(parsedData)

fs.writeFileSync('1-json.json', bookJSON)
*/

/*
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title)
*/

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "harshit"
data.age = 19

const writeData = JSON.stringify(data)
fs.writeFileSync('1-json.json', writeData)