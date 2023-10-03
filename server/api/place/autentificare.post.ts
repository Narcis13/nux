import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) =>{
    const body = await readBody(event);

    let user = null;
    await prisma.utilizatoriplace
      .findFirst({
        where: {
          numeadresa: body.nume,
          parola:body.parola
        },
      })
      .then(async (response) => {
        user = response;
      })
      .catch(async (e) => {
        console.error(e);
      });
  // console.log("Ajung in login utilizator",user)
    return {succes:user?true:false,utilizator:user}
})