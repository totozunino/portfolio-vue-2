<template>
  <v-app id="app">
    <notifications group="feedback" />
    <navbar />
    <v-main>
      <transition name="scale" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Navbar,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~@/assets/styles/index.css";
</style>
