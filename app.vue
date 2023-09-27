<template>
  <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
  </div>
</template>
<script setup>
import { NuxtLayout, NuxtPage } from '#build/components';
import { useCounterStore } from '@/stores/counterStore'

let store = useCounterStore()
</script>