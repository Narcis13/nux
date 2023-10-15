<script setup>
import { useUtilizatorStore } from '~/stores/userStore';
import { useQuasar } from 'quasar'

const utilizatorStore = useUtilizatorStore();
const emits=defineEmits(['mesaj-trimis'])
const $q = useQuasar()
const stringOptions = [
 
]
  const adresemail = ref([])
  const iduri_atasamente = ref([])
  const subiect = ref('')
  const mesaj = ref('')
    
   const   catre= ref(null)
    let toateadresele =   await $fetch("/api/place/mail/toateadresele")
    console.log('toate adresele',toateadresele) 
    toateadresele.map(a=>{
      adresemail.value.push({
        label:a.numeadresa,
        value:a.id
      })
      stringOptions.push({
        label:a.numeadresa,
        value:a.id
      })
    })
   function   filterFn (val, update, abort) {
        if (val.length < 2) {
          abort()
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          adresemail.value = stringOptions.filter(v => v.label.toLowerCase().indexOf(needle) > -1)
        })
      }
    
   function fisierUrcat(info){
     let r= JSON.parse(info.files[0].xhr.response)
     iduri_atasamente.value.push(r.raspuns.id)
   }

   async function trimiteMail(){

   
      console.log('trimite mail cu datele',{dela:utilizatorStore.utilizator.id,catre:catre.value.value,subiect:subiect.value,mesaj:mesaj.value},iduri_atasamente.value)
    let response=  await $fetch("/api/place/mail/mesajnou", {
        method: "POST",
        headers: {
         
        },
        body: {
          id_expeditor:utilizatorStore.utilizator.id,
          id_destinatar:catre.value.value,
          subiect:subiect.value,
          mesaj:mesaj.value
        },
      });
     console.log('am ttrimis mail si am primit...',mesaj.value)
      if(response.mesaj==="OK"){
        emits('mesaj-trimis')
        $q.notify({
          type: 'positive',
          position:'top',
          message: 'Mesaj trimis !'
        })
      }
    }
</script>


<template>
    <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Mesaj nou</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
            <div class="q-pa-md">
                <q-select
                class="q-mb-md"
                        filled
                        v-model="catre"
                        use-input
                        hide-selected
                        fill-input
                        input-debounce="0"
                        :options="adresemail"
                        @filter="filterFn"
                        hint="Minimum 2 characters to trigger filtering"
                        style="width: 350px; padding-bottom: 32px"
                    >
                        <template v-slot:no-option>
                        <q-item>
                            <q-item-section class="text-grey">
                           Niciun rezultat
                            </q-item-section>
                        </q-item>
                        </template>
                </q-select>

                <q-input v-model="subiect" class="q-mb-md" filled label="Subiect"  />
                <q-input
                class="q-mb-md"
                    label="Mesaj"
                    filled
                    type="textarea"
                    v-model="mesaj"
                    />
                    <q-uploader
                      label="Ataseaza fisiere"
                      auto-upload
                      field-name="atasament"
                      url="api/place/upload"
                      multiple
                      @uploaded="fisierUrcat"
                    />
                    <q-btn color="grey-4" text-color="purple" glossy unelevated icon="camera_enhance" label="Trimite" @click="trimiteMail"/>
            </div>
        </q-card-section>
      </q-card>
</template>