import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) =>{
    const body = await readBody(event);

    await prisma.utilizatoriplace.create({
        data:{
          numeadresa:body.nume,
          parola:body.parola,
          e_admin:body.admin,
      
        }
      }).then(async (response) => {
       
      })
      .catch(async (e) => {
        console.error(e);
        
      });
  // console.log("Ajung in ...creez utilizator",body)
    return {mesaj:"OK"}
})