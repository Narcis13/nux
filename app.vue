<template>
  <div>
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
       {{ store.count }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
    <q-btn label="Merge" />
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counterStore'

let store = useCounterStore()
</script>