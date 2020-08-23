<template>
  <v-app style="-webkit-app-region: drag">
    
    <!-- MAIN NAVIGATION -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent=""
      color="#222d32"
      dark
      app
    >
      <!-- company name & logo -->
      <v-list-item class="px-2 pt-1">
        <v-list-item-avatar>
          <v-img src="" alt="admin" class="mx-auto"/>
        </v-list-item-avatar>
        <v-list-item-title class="ml-4 text-capitalize">
          EMMG-19
        </v-list-item-title>
      </v-list-item>
    
      <v-divider></v-divider>

      <v-list-item two-line :class="miniVariant && 'px-0'">
        <v-list-item-avatar>
            <img src="https://cdn0.iconfinder.com/data/icons/man-user-human-profile-avatar-person-business/100/10B-1User-512.png">
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title>Henry Marks</v-list-item-title>
            <v-list-item-subtitle>Admin</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list shaped class="clickable">
        <template v-for="item in items">
          <v-list-group
          v-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item['icon-ctr']"
          :append-icon="item.model ? item.icon : item['icon-alt']"
          active-class="white--text"
          >

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{item.text}}
              </v-list-item-title>
            </v-list-item-content>
          </template>

            <v-list-item v-for="(child,i) in item.children" 
            :key="i"
            route :to="child.route"
            active-class="red--text"
            >
            <v-list-item-action v-if="child.icon">
              <v-icon>{{child.icon}}</v-icon>
            </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{child.text}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          
          <v-list-item class="style-type"
            v-else
            :key="item.text"
            active-class="white--text"
            route
            :to="item.route"
          >
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              {{item.text}}
            </v-list-item-title>
          </v-list-item>
        </template>

      </v-list>

      <v-divider></v-divider>

      <v-list-item>
            <v-list-item-icon>
              <v-icon>
                  settings
              </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
              <v-list-item-title class="sub-title">
                  Settings
              </v-list-item-title>
          </v-list-item-content>
      </v-list-item>

    </v-navigation-drawer>
    
    <!-- APP BAR -->
    <v-app-bar app color="#009688" dark>
      <v-app-bar-nav-icon @click.stop="mini = !mini" class="clickable"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm and down">Emmandget-19 Enterprise</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon v-on:click="logout" class="clickable">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- MAIN CONTENT -->
    <v-content>
      <v-container
        class="scroll-y"
        fluid
      >
        <v-row align="center" justify="center ">
          <router-view></router-view>
        </v-row>
        
      </v-container>
      
    </v-content>
    <v-btn
      v-scroll="onScroll"
      bottom
      color="red"
      dark
      fab
      fixed
      right
      @click="toTop"
      class="clickable"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>

import Api from '../services/api.js'
export default {
  name: 'App',

  props: {
    source:String
  },

  data: () => ({
    drawer: null,
    mini: false,
    fab: false,
    items: [
      {icon:'mdi-home', text:'Dashboard', route:'/'},
      {icon:'mdi-receipt', text:'Invoice', route:'/invoices'},
      {icon:'assignment_ind', text:'Customer', route:'/customers'},
      {icon:'card_membership', text:'Distributor', route:'/distributors'},
      {icon:'card_membership', text:'Brand', route:'/brands'},
      {icon:'category', text:'Category', route:'/categories'},
      {icon:'card_membership', text:'Product', route:'/products'},
      {icon:'mdi-home', text:'Stock', route:'/stocks'},
      {icon:'card_membership', text:'Analytics', route:'/analytics'},
      // {
      //   icon:'mdi-chevron-up',
      //   'icon-alt':'mdi-chevron-down',
      //   'icon-ctr':'mdi-cart-arrow-right',
      //   text:'Orders',
      //   model:false,
      //   children:[
      //     {icon:'style',text:'Type',route:'/Type'},
      //     {icon:'atm', text:'Mark', route:'/Mark'}
      //   ]
      // },
      {
         icon:'mdi-chevron-up',
        'icon-alt':'mdi-chevron-down',
        'icon-ctr':'mdi-google-maps',
        text:'Trackin',
        model:false,
        children:[
          {icon:'mdi-tooltip-account',text:'Locate','route':'/locate'},
          {icon:'mdi-printer', text:'Print', route:'/print'}
        ]
      },
      { icon:'mdi-finance', text:'Revenue', route:'/revenue' },
      { icon:'mdi-chart-pie', text:'Analytics', route:'/chart' },
      { icon:'mdi-magnify', text:'Search', route:'/Recherche' },
    ]
  }),

  computed:{

  },

  methods:{
    onScroll(e){
      if(typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop(){
      this.$vuetify.goTo(0)
    },
    logout(){
      Api().get('/logout')
          .then(()=>{
              window.location.replace('/')
      })
    }
  }
};
</script>

<style>
 .style-type{
    text-decoration: none !important;
 }
  .clickable{
    -webkit-app-region: no-drag
  }
  ::-webkit-scrollbar{
    width:12px;
  }
  ::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius:10px;
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5)
  }
</style>