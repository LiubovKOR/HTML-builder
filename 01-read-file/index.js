let fs = require('fs');
const { resolve } = require('path');
let path = require('path');
let pathFile = path.join(__dirname, 'text.txt');

async function readFile(path){
    return new Promise((resolve)=>{
        let readStream = fs.createReadStream(path);
        let readData = '';
        readStream.on('data', function(chunk) {
        readData += chunk;
        })
        readStream.on('end', () => {
            resolve(readData) ;
        }) 
    })   
}

readFile(pathFile).then((data) => {
    console.log(data);
})

exports.readFile = readFile;
