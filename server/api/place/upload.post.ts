import formidable from 'formidable';
import fs from 'fs';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
let raspuns={}
export default defineEventHandler(async (event) => {
  const form = formidable({ uploadDir: './public/' });

  const [fields,files] = await form.parse(event.node.req)
  //console.log(files)
  var fisier=null;
//  if (Array.isArray(files.atasament)) {
  //  files.atasament.forEach(( file) => {
      const fileName = `./public/${files.atasament[0].originalFilename}`;
      const file=files.atasament[0]
   //  console.log(fileName)
 await   prisma.atasamente.create({
      data:{
        original_name   : file.originalFilename,
        filename :fileName,
            filepath     :file.filepath,
        new_name   :    file.newFilename, 
         mimetype    :    file.mimetype,
          
           size        : file.size
    
      }
    }).then( (response) => {
    //  console.log('sunt in thjen',response,fisier)
      raspuns=response;

    })
    .catch(async (e) => {
      console.error(e);
      
    });

 
     // fs.rename(file.filepath, fileName, (err) => console.log(err));
  //  });
 
  //console.log('inainte de return',fisier,raspuns)
  return {
    message: 'success',
    raspuns
  };
});