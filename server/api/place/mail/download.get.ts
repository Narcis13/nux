import { PrismaClient } from "@prisma/client";
import fs from 'node:fs'
import { sendStream } from 'h3'
const prisma = new PrismaClient();

export default defineEventHandler(async (event) =>{
  const query = getQuery(event)
const a = await prisma.atasamente.findFirst({
  where: {
    id: parseInt(query.idatasament),
  },
})
//console.log(a)
return sendStream(event, fs.createReadStream(a?.filename))

/*
return await prisma.$queryRaw`
SELECT a.id,a.original_name,a.new_name,a.mimetype,a.size,a.filename,a.filepath FROM mesaje m
inner join atasamentemesaje am on am.mesaj_id=m.id
inner join atasamente a on a.id=am.atasament_id
where m.id=${query.idmesaj};
  `;*/
})