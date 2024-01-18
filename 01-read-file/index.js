let fs = require('fs');
let path = require('path');
let pathFile = path.join(__dirname, 'text.txt');

function readFile(path){
    let readStream = fs.createReadStream(pathFile, 'utf8');
    let readData = '';
    readStream.on('data', function(chunk) {
    readData +=  chunk;
    })
    readStream.on('end', () => {
        console.log(readData);
    }) 
    return readData; 
}
console.log(readFile(path));
exports.readFile = readFile;
