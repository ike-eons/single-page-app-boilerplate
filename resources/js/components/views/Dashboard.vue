<template>
    <v-row>
        
    </v-row>
</template>

<script>
import DashboardLayout from '../layouts/DashboardLayout'
import Api from '../../services/api.js'
export default {
    // components:{
    //     DashboardLayout,
    // },
    data(){
        return{
            user:null
        }
    },
    created(){
        this.$emit(`update:layout`,DashboardLayout);

      
    },
    // mounted(){
    //     Api().get(`user`)
    // }
}
</script>

<style>

</style>