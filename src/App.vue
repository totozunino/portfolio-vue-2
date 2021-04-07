<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar/Navbar.vue";

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~@/assets/styles/index.css";
</style>
