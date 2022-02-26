const http = require('http')

const server = http.createServer((req, res)=>{
    switch (req.url) {
        case "/":
            res.write("Home Page")
            res.end()
            break;
        case "/about":
            res.write("About Page")
            res.end()
            break;
        default:
            res.write(`
                <h1>Resource does not exist</h1>
                <a href="/">Return Home</a>
            `)
            res.end()
            break;
    }
})

server.listen(5001)