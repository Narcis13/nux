import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) =>{
  const query = getQuery(event)
//  console.log(query)
  return await prisma.$queryRaw`
  SELECT m.id ,m.created_at,date_format(m.created_at, '%d/%m/%Y') as ziua,date_format(m.created_at,'%H:%i') as ora,e.numeadresa as expeditor,d.numeadresa as destinatar,m.id_expeditor,m.id_destinatar, m.subiect,m.mesaj,m.stare FROM mesaje m
inner join utilizatoriplace e on e.id=m.id_expeditor 
inner join utilizatoriplace d on d.id=m.id_destinatar 
where m.id_destinatar=${query.iddestinatar}
order by m.created_at desc;
  `;


})