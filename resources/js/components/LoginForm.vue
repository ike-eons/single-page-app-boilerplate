<template>
  <v-app color="#f6f6f6">
      <div width="600" class="mx-auto py-5">
          <h1>Business Information System</h1>
      </div>
      
      <v-card width="400" class="mx-auto" elevation-11 tile>
          <v-card-title>
              <h1>Login</h1>
          </v-card-title>
          <v-card-text>
              <v-form>
                <v-text-field  label="Email"
                    prepend-icon="mdi-account-circle"
                    v-model="form.email"
                />
                <v-text-field 
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    v-model="form.password"
                />
              </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn block color="success" @click="login">LOGIN</v-btn>
          </v-card-actions>
      </v-card>
  </v-app>
</template>

<script>

import Api from '../services/api.js'
import user from '../services/user.js'

export default {
 data(){
    return{
        showPassword:false,
        form:{
            email:null,
            password:null,
            device_name:'laptop'
        },
        errors:[]
    } 
 },

 methods:{

    // async login(){  
    //     try {
    //          let response = await Api().post(`/login`,{
    //                 email:this.user.email,
    //                 password:this.user.password
    //     })
    //     // if(response){
    //     //     window.location.replace('/api/dashboard')
    //     // }
    //     console.log(response);
    //     } catch (error) {
    //         this.errors = error.response.data.errors
    //     }
    // },
    login(){
        Api().post(`/`,this.form)
            .then(()=>{
                this.$root.$emit('login',true);
                localStorage.setItem('auth','true');
                router.push({name:'Dashboard'})
            })
            .catch(error=>{
                if(error.response.status == 404){
                    this.errors = error.response.data.errors;
                }
                console.log(this.errors)
            })
    }
 }
 

}

</script>

<style>

</style>