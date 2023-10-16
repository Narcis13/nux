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
        // console.log('then prisma.mesaje.create',response,body.atasamente.length)
         let d=[]

         if(body.atasamente.length>0){
             body.atasamente.map(a=>{
              d.push({
                mesaj_id:response.id,
                atasament_id:a
              })
             })
             await prisma.atasamentemesaje.createMany({
              data:d
             })
         }
      })
      .catch(async (e) => {
        console.error(e);
        
      });

 // console.log("Mesaj nou",body)
    return {mesaj:"OK"}
})