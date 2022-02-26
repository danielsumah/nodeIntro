const { readFileSync, writeFileSync} = require('fs')

const first = readFileSync("new/text.txt", 'utf8')
console.log(first)


// writing to file
const name = "Daniel"
writeFileSync(
    "./new/new-file.txt",
    `My name is : ${name}`
)

//use flag to add a new line instead of overiding
writeFileSync(
    "./new/new-file.txt",
    "welcome on board",
    {flag:'a'}
)