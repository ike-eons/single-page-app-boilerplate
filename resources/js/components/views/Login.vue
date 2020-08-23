<template>
    <v-row>
        
        <v-spacer></v-spacer>
            <div width="600" class="mx-auto py-5">
                <h1>Business Information System</h1>
            </div>
            
        <v-spacer></v-spacer>
       <v-col cols="12">
            <v-card width="400" class="mx-auto" elevation-11>
                <v-toolbar color="teal" dark>
                  <v-card-title>
                    <h4>Login Account</h4>
                </v-card-title>  
                </v-toolbar>
                <v-progress-linear v-if="apiRequest" :indeterminate="true" color="teal"></v-progress-linear>
                
                <v-card-text>
                    <v-form>
                        <v-text-field  label="Email"
                            prepend-icon="mdi-account-circle"
                            v-model="user.email"
                        />
                        <!-- <span class="danger" v-if="errors.email">
                            {{errors.email[0]}}
                        </span> -->
                        <v-text-field 
                            :type="showPassword ? 'text' : 'password'"
                            label="Password"
                            prepend-icon="mdi-lock"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                            v-model="user.password"
                        />
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="teal" dark @click="login">LOGIN</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>

import Api from '../../services/api.js'
import LoginLayout from '../Layouts/LoginLayout'

export default {
    data(){
        return{
            showPassword:false,
            apiRequest:false,
            user:{
                email:null,
                password:null,
                device_name:'laptop'
            },
            errors:[]
        } 
    },
    created(){
        this.$emit(`update:layout`,LoginLayout);
    },

 methods:{

    async login(){  
        this.apiRequest = true;
        // Api().post(`/login`,this.user)
        //     .then(()=>{
        //         this.$root.$emit('login',true);
        //         console.log(response);
        //         // localStorage.setItem("token",response.data);
        //         // this.$router.push({name:'Dashboard'})
        //     })
        //     .catch(error=>{
        //         // if(error.response.status === 422){
        //             this.errors = error.response.data.errors;
        //         // }
        //         console.log(this.errors)
        //     })
        const response = await Api().post(`/login`,this.user);
        this.$root.$emit('login',true);
        localStorage.setItem("token",response.data);
        this.$router.push({name:'Dashboard'})

        this.apiRequest = true;
    },
 }
 

}

</script>

<style>

</style>