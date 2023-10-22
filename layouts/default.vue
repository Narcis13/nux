<script setup>
import { useUtilizatorStore } from '~/stores/userStore';

const utilizatorStore = useUtilizatorStore();

function deconectare(){
  utilizatorStore.logout()
  navigateTo('./')
}
</script>
<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded dark class="bg-accent text-white">
     <div class="text-h6">{{ utilizatorStore.eLogat? 'Bine ai venit '+utilizatorStore.utilizator.numeadresa:'Place vers. 0.1' }}</div>

      <template v-slot:action>
        <q-btn  v-show="!utilizatorStore.eLogat"  dark  color="black" text-color="white"   label="Autentificare" @click="navigateTo('/autentificare')"/>
        <q-btn  v-show="utilizatorStore.eLogat" dark  color="black" text-color="white"   label="Deconectare" @click="deconectare"/>
        <q-btn v-show="utilizatorStore.eLogat&&utilizatorStore.eAdmin"  dark class="q-ml-md" glossy text-color="white" color="deep-orange" label="Inregistrare " @click="navigateTo('/inregistrare')" />
      </template>
    </q-banner>
    <slot />


  </div>
</template>