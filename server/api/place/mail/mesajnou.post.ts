import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) =>{
    const body = await readBody(event);
   // console.log('Body mesaj nou',body)
    await prisma.mesaje.create({
        data:{
          id_expeditor:body.id_expeditor,
          id_destinatar:body.id_destinatar,
          subiect:body.subiect,
          mesaj:body.mesaj
      
        }
      }).then(async (response) => {
         console.log('then prisma.mesaje.create')
      })
      .catch(async (e) => {
        console.error(e);
        
      });

  console.log("Mesaj nou",body)
    return {mesaj:"OK"}
})