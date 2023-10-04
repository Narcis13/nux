import {defineStore} from 'pinia'

export const useUtilizatorStore = defineStore('utilizatorStore',()=>{

    const utilizator = ref(null)
    const eLogat = ref(false)
    const eAdmin =ref(false)

    function setUtilizator(u){
        utilizator.value=u
    }

    function setELogat(){
        eLogat.value=true
    }

    function setEAdmin(){
        eAdmin.value=true
    }

    function logout(){
        utilizator.value=null
        eLogat.value=false
        eAdmin.value=false
    }

    return {
        setUtilizator,
        setEAdmin,
        setELogat,
        logout,
        utilizator,
        eLogat,
        eAdmin
    }
})