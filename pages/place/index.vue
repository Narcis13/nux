<script setup>
import { useUtilizatorStore } from '~/stores/userStore';

const utilizatorStore = useUtilizatorStore();

definePageMeta({
    layout:"place"
})

</script>

<template>
    <div class="flex " style="width:1200px">
        <Dashboard  v-if="utilizatorStore.eLogat"/>
        <h3 v-if="!utilizatorStore.eLogat">Place v 0.1</h3>
    
    </div>
  

</template>