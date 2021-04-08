<template>
  <div class="footer pa-6">
    <div class="text-center my-2">
      <p class="text-h5 mb-2 text-center">Navigate</p>
      <router-link to="/" class="footer__item" @click.native="scrollToTop">Home</router-link>
      <router-link to="/about" class="footer__item" @click.native="scrollToTop">About</router-link>
      <router-link to="/contact" class="footer__item" @click.native="scrollToTop">Contact</router-link>
      <p class="text-h5 mb-0 mt-4 text-center">Social</p>
      <v-btn class="mx-2" x-large icon dark @click="newTab('https://www.linkedin.com/in/mathias-zunino-5531021a3/')">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn class="mx-2" x-large icon dark @click="newTab('https://gitlab.com/totoz')">
        <v-icon>mdi-gitlab</v-icon>
      </v-btn>
      <v-btn class="mx-2" x-large icon dark @click="newTab('https://github.com/totozunino')">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </div>
    <hr />
    <p class="pt-4 mb-1">Designed by @totoz - 2020</p>
    <p style="opacity: 0.6" class="mb-0">Made with</p>
    <v-avatar size="40" tile class="pt-0">
      <v-img src="@/assets/images/vue-logo.png" alt="Vue Logo"></v-img>
    </v-avatar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Footer extends Vue {
  private newTab(link: string) {
    window.open(link, "_blank");
  }

  private scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #272532;
  height: 325px;
  color: #fff;
  display: grid;
  place-items: center;

  &__item {
    text-decoration: none;
    color: white;
    opacity: 0.8;
    padding: 0 20px;
  }
}

hr {
  border-color: #bababa24;
  border-top-width: 1px;
  width: 100%;
}
</style>
