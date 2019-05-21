<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="toggleSideMenu"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <SideNave></SideNave>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import {mapActions}from 'vuex'
import SideNave from './components/SideNav'
export default {
  name: 'App',
  components: {
    SideNave
  },
  data () {
    return {
      //
    }
  },
  methods:{
    ...mapActions(['toggleSideMenu'])
  }
}
</script>