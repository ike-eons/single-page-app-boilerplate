<template>
    <v-app>
        <component :is="layout">
            <router-view :layout.sync="layout" />
        </component>
    </v-app>
</template>

<script>
export default {
    data(){
        return{
            layout:`div`,
        }
    }
}
</script>

<style>

</style>