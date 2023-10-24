import {defineStore} from 'pinia'

export const useRaportConturiStore = defineStore('raportConturiStore',()=>{

    const set_date = ref([
        {nume:'Popescu Ion'},
        {nume:'Petrescu Valeria'}
    ])

    return {
      set_date
    }
})