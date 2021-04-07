<template>
  <div class="nav">
    <router-link to="/">
      <img src="@/assets/images/logo.png" alt="Logo" class="nav__logo" />
    </router-link>
    <Menu />
    <div class="nav__items hidden-xs-only">
      <v-btn class="pa-5" text tile color="primary" to="/">Home</v-btn>
      <v-btn class="pa-5" text tile color="primary" to="/about">About</v-btn>
      <v-btn class="pa-5" text tile color="primary" to="/contact">Contact</v-btn>
      <a href="/files/Resume.pdf" download target="_blank">
        <v-btn color="primary" dark class="mx-2">Resume</v-btn>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Menu from "@/components/Navbar/Menu.vue";

@Component({
  components: {
    Menu
  }
})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.nav {
  padding: 1.4rem 0.5rem 0px;
  margin: 0 5% !important;
  display: flex;
  justify-content: space-between;

  &__logo {
    width: 78px;
  }

  &__items {
    align-self: center;
  }
}

a {
  text-decoration: none;
}
</style>
