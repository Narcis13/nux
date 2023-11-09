import formidable from 'formidable';
import fs from 'fs';


let raspuns={}
export default defineEventHandler(async (event) => {
  const form = formidable({ uploadDir: './public/' });

  const [fields,files] = await form.parse(event.node.req)
  //console.log(files)

//  if (Array.isArray(files.atasament)) {
  //  files.atasament.forEach(( file) => {
     
      const file=files.atasament[0]
      const fileName = `./public/${file.newFilename+'_'+files.atasament[0].originalFilename}`;
    //  fs.rename(file.filepath, fileName, (err) => console.log(err));
   //  console.log(fileName)


 
     // fs.rename(file.filepath, fileName, (err) => console.log(err));
  //  });
 
  //console.log('inainte de return',fisier,raspuns)
  return {
    message: 'success',
    raspuns:file.newFilename
  };
});