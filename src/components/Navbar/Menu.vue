<template>
  <v-menu transition="slide-y-transition">
    <template v-slot:activator="{ on }">
      <v-btn fab icon v-on="on" class="hidden-sm-and-up">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-btn text tile color="primary" block to="/">Home</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn text tile color="primary" block to="/about">About</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn text tile color="primary" block to="/contact">Contact</v-btn>
      </v-list-item>
      <v-list-item>
        <a href="/files/Resume.pdf" download target="_blank">
          <v-btn color="primary" dark class="mx-2">Resume</v-btn>
        </a>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Menu extends Vue {}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
