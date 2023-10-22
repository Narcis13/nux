<script setup>
import { useQuasar } from 'quasar'
import { useUtilizatorStore } from '~/stores/userStore';

const utilizatorStore = useUtilizatorStore();
let nume=ref('')
let parola=ref('')
const $q = useQuasar()
async function login(){

  let response=  await $fetch("/api/place/autentificare", {
        method: "POST",
        headers: {
         
        },
        body: {
          nume:nume.value,
          parola:parola.value,
         
        },
      });
      console.log('Raspuns de la autentificare',response)
      if(response.succes){
        utilizatorStore.setUtilizator(response.utilizator)
        utilizatorStore.setELogat()
        if(response.utilizator.e_admin) utilizatorStore.setEAdmin()
        navigateTo("./")
      }
      else {
        $q.notify({
          type: 'negative',
          position:'top',
          message: 'Autentificare esuata !'
        })
         nume.value=""
         parola.value=""
      }
} 

</script>



<template>
   <div class="flex flex-center q-pa-md">

<div class="q-gutter-y-md column flex-center" style="max-width: 300px">
    <h5>Autentificare</h5>
  <q-input v-model="nume" clearable filled color="purple-12"  label="Adresa mail" />
  <q-input v-model="parola" clearable filled color="purple-12"  label="Parola"  type="password" />
 
  <q-btn color="primary" label="Autentificare !"  @click="login"/>
</div>

</div>

  
</template>