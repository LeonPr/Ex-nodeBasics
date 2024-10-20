import fs from 'fs'
import ms from 'ms'
readTimeFile()

function readTimeFile(){
    fs.readFile('data/time.txt', 'utf8', (err, content) => {
        if (err){
            return console.log('Cannot read file', err)
        } else{
            let myRes=content.split('\r\n')
            // console.log('myRes', myRes)
            myRes.map(timestamp=> console.log('relative time:', ms(+timestamp,{long:true})))
        }
    })
}