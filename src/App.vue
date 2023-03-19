<script >
import { RouterView } from 'vue-router'
import Navigation from "./components/Navigation.vue"
export default{
  name: "App",
  components: {
    Navigation
  }
}

</script>

<template>
 <main class="container">
  <Navigation />
  <RouterView />
 </main>
</template>

