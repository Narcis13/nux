<script setup>
const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]
  const options = ref(stringOptions)
    
   const   catre= ref(null)
    let toateadresele =   await $fetch("/api/place/mail/toateadresele")
    console.log('toate adresele',toateadresele) 
   function   filterFn (val, update, abort) {
        if (val.length < 2) {
          abort()
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
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
                        :options="options"
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

                <q-input  class="q-mb-md" filled label="Subiect"  />
                <q-input
                class="q-mb-md"
                    label="Mesaj"
                    filled
                    type="textarea"
                    />

                    <q-btn color="grey-4" text-color="purple" glossy unelevated icon="camera_enhance" label="Trimite" />
            </div>
        </q-card-section>
      </q-card>
</template>