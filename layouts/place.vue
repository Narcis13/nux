<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner inline-actions rounded class="bg-orange text-white">
      You have lost connection to the internet. This app is offline.

      <template v-slot:action>
        <q-btn flat label="Autentificare" to="./autentificare"/>
        <q-btn flat label="Inregistrare " to="./inregistrare" />
      </template>
    </q-banner>
    <slot />


  </div>
</template>