import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) =>{
  const query = getQuery(event)

//console.log(query.idmesaj)



return await prisma.$queryRaw`
SELECT a.original_name,a.new_name,a.mimetype,a.size,a.filename,a.filepath FROM whole.mesaje m
inner join atasamentemesaje am on am.mesaj_id=m.id
inner join atasamente a on a.id=am.atasament_id
where m.id=${query.idmesaj};
  `;
})