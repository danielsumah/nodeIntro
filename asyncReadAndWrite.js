const {readFile, writeFile} = require('fs')
readFile("./new/text.txt","utf-8",(err, result)=>{
    if(err){
        console.log(err)
        return 0
    }
    const firstFile = result;

    readFile("new/file2.txt", "utf-8", (err, result)=>{
        if(err){
            console.log(err)
            return 0
        }
        const secondFile = result
        writeFile(
            "new/async-result.txt",
            `Here are the results : ${firstFile}, ${secondFile}`,
            (err, result)=>{
                if(err){
                    console.log(err)
                }
                console.log(result)
            }
        )
    })

    
})