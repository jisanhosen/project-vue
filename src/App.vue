<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    <buttom></buttom>
  </div>
</template>

<script>
  import Navbar from './componant/Navbar.vue'
  import Footer from './componant/Footer.vue'

  export default {
    components : {
      'navbar' : Navbar,
      'buttom' : Footer,
    }
  }
</script>

<style>

</style>
