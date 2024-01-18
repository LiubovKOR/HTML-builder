let fs = require('fs');
const { readdir } = require('fs/promises');
let path = require('path');
let dirPath = path.join(__dirname, 'secret-folder');
async function  readDir(dirPath) {
    let files = await readdir(dirPath);
    for(let item of files){
        let filePath = path.join(__dirname, 'secret-folder', item);
        let itemStat = await fs.promises.stat(filePath);
        if(itemStat.isFile()){
            let res;
            res  = `${item} - ${path.extname(filePath)} - ${itemStat.size/1000}kb`;
            console.log(res);
        }
    }
}
readDir(dirPath);