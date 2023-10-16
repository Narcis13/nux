import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) =>{
  const query = getQuery(event)

  BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
  };
  
//  console.log(query)
  return await prisma.$queryRaw`
  SELECT m.id ,m.created_at,date_format(m.created_at, '%d/%m/%Y') as ziua,date_format(m.created_at,'%H:%i') as ora,e.numeadresa as expeditor,d.numeadresa as destinatar,m.id_expeditor,m.id_destinatar, m.subiect,m.mesaj,m.stare,count(am.atasament_id) atasamente FROM mesaje m
  inner join utilizatoriplace e on e.id=m.id_expeditor 
  inner join utilizatoriplace d on d.id=m.id_destinatar 
  left join atasamentemesaje am on am.mesaj_id=m.id
  where m.id_destinatar=${query.iddestinatar}
  group by m.id
  order by m.created_at desc;
  `;


})