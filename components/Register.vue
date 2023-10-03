<script setup>
let nume=ref('')
let parola=ref('')
let eAdmin = ref(false)

async function salveazaUtilizator(){
  console.log("utilizator", nume.value,parola.value,eAdmin.value)
  await $fetch("/api/place/utilizatornou", {
        method: "POST",
        headers: {
         
        },
        body: {
          nume:nume.value,
          parola:parola.value,
          admin:eAdmin.value
        },
      });
  navigateTo("../place")
}
</script>



<template>

   <div class="flex flex-center q-pa-md">

    <div class="q-gutter-y-md column flex-center" style="max-width: 300px">
        <h5>Inregistrare utilizator nou</h5>
      <q-input v-model="nume" clearable filled color="purple-12"  label="Adresa mail" />
      <q-input v-model="parola" clearable filled color="purple-12"  label="Parola"  type="password" hint="Minim 8 caractere"/>
      <q-checkbox v-model="eAdmin" label="E administrator" color="teal" />
      <q-btn color="purple" label="Salveaza !"  @click="salveazaUtilizator"/>
    </div>
   
  </div>
</template>