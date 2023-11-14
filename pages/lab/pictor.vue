<script setup>
let systemPrompt=ref('Vreau o poza foarte realista in stil cinematic cu un medic cu barba de 50 de ani aflat pe o plaja exotica !')
let url_imagine=ref('https://picsum.photos/500/300')
async function deseneaza(){
    const res= await $fetch("/api/ai/dali", {
        method: "POST",
        headers: {
         
        },
        body: {
          system:systemPrompt.value,

        },
      });
    //  console.log(res.image[0].url)
      url_imagine.value=res.image[0].url
}
</script>

<template>
<div class="flex flex-center q-pa-md">

<div class="q-gutter-y-md column q-mb-md" style="max-width: 500px">

    <q-input style="width: 300px;" v-model="systemPrompt" type="textarea" filled color="purple-12"  label="Sistem" />


    <q-btn color="primary" label="Deseneaza!"  @click="deseneaza"/>
    <div class="q-mt-md">
    
        <q-img
          :src="url_imagine"
          :ratio="1"
        />
      </div>
</div>

</div>
</template>