let fs = require('fs');
let path = require('path');
let styleFolderPath = path.join(__dirname, 'styles');
async function bundleStlsFromFolder(folderPath, bundlerPath) {
    let stylesArray = [];
    let files = await fs.promises.readdir(folderPath);
    for(let item of files){
        let filePath = path.join(folderPath, item); 
        let itemStat = await fs.promises.stat(filePath);
        if(itemStat.isFile()){
            if(path.extname(filePath) === '.css') {
                let data = await fs.promises.readFile(filePath, 'utf8');
                stylesArray.push(data);
                
            }
        }
        
    }
    await fs.promises.writeFile(bundlerPath, stylesArray.join('\n'));
}
bundleStlsFromFolder(styleFolderPath, path.join(__dirname,'project-dist', 'bundle.css'));
 

