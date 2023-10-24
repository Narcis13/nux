import knex from '../../knex/dbtwo.js';




export default defineEventHandler(async (event) =>{
    let r=null;

   await knex.select('*')
    .from('categorii').then(  (rows)=>{
     //  console.log(rows)

         r=  rows;
    })
   return r;
  })