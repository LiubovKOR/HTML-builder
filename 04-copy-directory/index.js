let fs = require('fs');
let path = require('path');
destinationDir = path.join(__dirname, 'files-copy');
sourceDir = path.join(__dirname, 'files');

 async function copyDir(sourceDir, destinationDir) {  
  await fs.promises.mkdir(path.join(destinationDir), { recursive: true });
  console.log('Directory created successfully!');
  let files  = await fs.promises.readdir(sourceDir, (err, data) =>  data );
  console.log(files);

  for(let i = 0; i < files.length; i++){
    fs.copyFile(path.join(sourceDir, files[i]), path.join(destinationDir, files[i]), err => {
    if(err) throw err;
    console.log('file copied successfully!');
  });
  }    
}
copyDir(sourceDir, destinationDir );