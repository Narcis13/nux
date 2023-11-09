<template>
   <div class="flex flex-center q-pa-md">

        <div class="q-gutter-y-md column " style="max-width: 500px">
             <h5>Ce e in poza?</h5>
         
             <q-uploader
                      label="Incarca poza"
                      auto-upload
                      field-name="atasament"
                      :url="host+'api/ai/upload'"

                      @uploaded="fisierUrcat"
                    />
            <q-input style="width: 450px;" v-model="systemPrompt" type="textarea" filled color="purple-12"  label="Sistem" />
            <q-input style="width: 450px;" v-model="userPrompt" type="textarea" filled color="purple-12"  label="Utilizator"  />
 
            <q-btn color="primary" label="Intreaba !"  @click="intreaba"/>
        </div>

    </div>
</template>
<script setup>
const config = useRuntimeConfig()
let host= config.public.placeHost
//console.log('Host: ',config.public.placeHost)

let systemPrompt=ref('You are an excellent accountant and look at receipts and invoices to aknowledge what the client bought.')
let userPrompt = ref('Make a comma separated text with vendor name, date, total amount spent, payment method (cash or card) and nothing else!')
let url_fisier=ref('')
function fisierUrcat(info){
    let r= JSON.parse(info.files[0].xhr.response)
    url_fisier.value=host+r.raspuns;
    console.log(r)
}
async function intreaba(){
   const res= await $fetch("/api/ai/vision", {
        method: "POST",
        headers: {
         
        },
        body: {
          system:systemPrompt.value,
          user:userPrompt.value,
          url:url_fisier.value
        },
      });
    console.log(res.raspuns)  
}
</script>