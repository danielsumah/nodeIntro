const path = require("path")
console.log(path.sep)

const filepath = path.join('./new','text.txt')
console.log(filepath)


// print the base name of a file path
const baseName = path.basename(filepath)
console.log(baseName)

//print the absolute path of a file
const absPath = path.resolve(__dirname, 'new/text.txt')
console.log(absPath)