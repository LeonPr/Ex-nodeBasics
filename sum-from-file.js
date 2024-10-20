import fs from 'fs'

sumFromFile()

function sumFromFile(){
    fs.readFile('data/nums.txt', 'utf8', (err, content) => {
        if (err){
            return console.log('Cannot read file', err)
        } else{
            let myRes=content.split('\r\n')
            const initialValue = 0
            const sumWithInitial = myRes.reduce(
                (accumulator, currentValue) => +accumulator + +currentValue,
                initialValue,
              )
              console.log(sumWithInitial)
        }
    })
}