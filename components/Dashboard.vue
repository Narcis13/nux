<script setup>
let splitterModel = ref(15)
let link=ref('inbox')
const showMesajNou=ref(false)
function mesajTrimis(){
  console.log('mesaj trimis')
  showMesajNou.value=false
}
</script>

<template>
     <div class="q-pa-md" style="width:1200px">
    <q-splitter
      v-model="splitterModel"
      style="height: 90vh"
    >

      <template v-slot:before>
        <div class="q-pa-md" style="max-width:250px">
    <q-list bordered padding class="rounded-borders text-primary">
      <q-item
        clickable
        v-ripple
        :active="link === 'inbox'"
        @click="link = 'inbox'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>

        <q-item-section>Inbox</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'outbox'"
        @click="link = 'outbox'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>

        <q-item-section>Outbox</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'trash'"
        @click="link = 'trash'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="delete" />
        </q-item-section>

        <q-item-section>Gunoi</q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item
        clickable
        v-ripple
        :active="link === 'settings'"
        @click="link = 'settings'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section>

        <q-item-section>Settings</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        :active="link === 'help'"
        @click="link = 'help'"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon name="help" />
        </q-item-section>

        <q-item-section>Help</q-item-section>
      </q-item>
    </q-list>
    <br>
    <div class="q-pa-sm">
      <q-btn icon="add" label="Mesaj nou.." stack glossy color="black" @click="showMesajNou=true"/>
    </div>

  </div>
      </template>

      <template v-slot:after>
        <div class="q-pa-md">
          <mail-inbox v-if="link==='inbox'" />
           <mail-outbox v-if="link==='outbox'" />
        </div>
      </template>

    </q-splitter>
  </div>

    <q-dialog v-model="showMesajNou" persistent transition-show="flip-down" transition-hide="flip-up">
      <mail-new-message @mesaj-trimis="mesajTrimis"/>
    </q-dialog>
</template>

<style >
.my-menu-link {
  color: white;
  background: #F2C037;
}

</style>