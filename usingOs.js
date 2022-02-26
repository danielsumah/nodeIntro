const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//get system up time
console.log(`this system has been up for ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)