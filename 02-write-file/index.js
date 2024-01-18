let fs = require('fs');
let path = require('path');
let readline = require('readline');
let filePath = path.join(__dirname, 'text.txt');
let writableStream = fs.createWriteStream(filePath);
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
console.log('Введите текст');
rl.prompt();
rl.on('line', (input) => {
    if(!(input == 'exit')) writableStream.write(input); 
    else rl.close(); 
  });

rl.on('SIGINT', () => {
    rl.close();
});

