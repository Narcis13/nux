<template>
   <div class="flex flex-center q-pa-md">

        <div class="q-gutter-y-md column " style="max-width: 500px">
             <h5>Ce e in poza?</h5>
             <q-uploader
                      label="Incarca poza"
                      auto-upload
                      field-name="atasament"
                      url="http://localhost:3000/api/ai/upload"

                      @uploaded="fisierUrcat"
                    />
            <q-input style="width: 450px;" v-model="systemPrompt" type="textarea" filled color="purple-12"  label="Sistem" />
            <q-input style="width: 450px;" v-model="userPrompt" type="textarea" filled color="purple-12"  label="Utilizator"  />
 
            <q-btn color="primary" label="Intreaba !"  />
        </div>

    </div>
</template>
<script setup>


let systemPrompt=ref('You are an excellent accountant and look at receipts and invoices to aknowledge what the client bought.')
let userPrompt = ref('Make a comma separated text with vendor name, date, total amount spent, payment method (cash or card) and nothing else!')

function fisierUrcat(info){
    let r= JSON.parse(info.files[0].xhr.response)
    console.log(r)
}
</script>