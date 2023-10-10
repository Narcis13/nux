<script setup>
import { useUtilizatorStore } from '~/stores/userStore';
const utilizatorStore = useUtilizatorStore();
const columns = [
  
  { name: 'ziua', align: 'center', label: 'Ziua', field: 'ziua', sortable: true },
  { name: 'ora',align: 'center', label: 'Ora', field: 'ora', sortable: true },
  { name: 'expeditor', align: 'center', label: 'Expeditor', field: 'expeditor' },
  { name: 'subiect', label: 'Subiect', field: 'subiect' ,align:'left'}

]

async function toateMesajele(){

  let data =   await $fetch("/api/place/mail/toatemesajele?iddestinatar="+utilizatorStore.utilizator.id)
 // console.log(data)
  return data;
}


// we generate lots of rows here
let rows = ref([])
let ms=toateMesajele()
ms.then(r=>{
    console.log(r)
    r.map(m=>{
        rows.value.push(m)
    })
    
})
console.log('toate mesajele',ms)
/*ms.map(m=>{
  rows.push(m)
})
*/
const pagination= ref({
        rowsPerPage: 0
      })

function clickpemail(e,r,i){
    console.log('click pe mail',e,r,i)
}      
</script>
<template>
    <div class="q-pa-md">
    <q-table
      class="my-sticky-virtscroll-table"
      @row-click="clickpemail"
      virtual-scroll
      flat bordered
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
      :virtual-scroll-sticky-size-start="48"
      row-key="id"
      title="Mesaje primite"
      :rows="rows"
      :columns="columns"
    />
  </div>
</template>

<style >
.my-sticky-virtscroll-table {
  /* height or max-height is important */
  height: 90vh;
}


  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    color:rgb(238, 222, 203) ;
    background-color: #021c28;
  }
   

  thead tr th {
    position: sticky;
    z-index: 1;
  }

  /* this will be the loading indicator */
  thead tr:last-child th {
    top: 48px;
  }
    /* height of all previous header rows */
   
  thead tr:first-child th
  {
    top: 0;
  }
    

  /* prevent scrolling behind sticky top row on focus */
  tbody {
    scroll-margin-top: 48px;
  }

    /* height of all previous header rows */
    
</style>
