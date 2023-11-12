
import fs from 'fs';
import path from 'path';

function getFileNamesInFolder(folderPath) {
  // Read the contents of the folder
  const files = fs.readdirSync(folderPath);

  // Filter out only the files (not directories)
  const fileNames = files.filter(file => {
    const filePath = path.join(folderPath, file);
    return fs.statSync(filePath).isFile();
  });

  return fileNames;
}

// Example usage


export default defineEventHandler(async (event) =>{

    


      return {text:process.cwd()}
    })