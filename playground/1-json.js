const fs = require('fs')
//const book = {

  //  'title' : 'Beginning NodeJS 3',
    //'author' : 'Shadrack Sithole'
//}

//const bookJSON = JSON.stringify(book)
//fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

// Update 1-josn.json file

//console.log(data.title)

data.title = 'Beginning Ruby 3'
const bookJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', bookJSON)