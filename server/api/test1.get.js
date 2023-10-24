import knex from '../../knex/dbone.js';




export default defineEventHandler(async (event) =>{
    let r=null;

   await knex.select('*')
    .from('specialitates').then(  (rows)=>{
     //  console.log(rows)

         r=  rows;
    })
   return r;
  })