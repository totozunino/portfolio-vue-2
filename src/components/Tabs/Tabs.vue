<template>
  <div>
    <v-tabs v-model="tab" show-arrows>
      <v-tabs-slider></v-tabs-slider>
      <v-tab v-for="tab in tabs" :key="tab.name" :href="`#tab-${tab.name}`">
        <v-img max-width="42px" max-height="38px" :src="tab.logo" alt="Logo"></v-img>
        <span class="pl-4" style="font-size: 0.6rem">{{ tab.name }}</span>
      </v-tab>

      <v-tab-item v-for="tab in tabs" :key="tab.name" :value="'tab-' + tab.name">
        <Tab :role="tab.role" :date="tab.date" :info="tab.info" />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Tab from "@/components/Tabs/Tab.vue";

@Component({
  components: {
    Tab
  }
})
export default class Tabs extends Vue {
  private tab = null;
  private tabs = [
    {
      name: "Broken Rubik",
      logo: require("@/assets/images/brokenrubik.jpeg"),
      role: "Analyst @BrokenRubik",
      date: "Apr 2020 - Feb 2021",
      info: [
        "Worked with Netsuite plataform creating Suitescripts",
        "Developing and maintaining code for e-commerce websites primarily using Backbone.js, Sass and jQuery ",
        "Developed a node app using Fastify, Typescript and Algolia",
        "Building an app in shopify with Vue.js as Frontend and Koa.js, PostgreSQL in the Backend",
        "Desiging website using Gridsome and TailwindCSS"
      ]
    },
    {
      name: "IntegraCCS",
      logo: require("@/assets/images/integraccs.svg"),
      role: "Developer @IntegraCCS",
      date: "Sep 2019 - Apr 2020",
      info: [
        "Developed a app for call centers management using Vue, Vuex, Vuetify and Typescript",
        "Developed a backend app using Koa, Typescript and Couchbase",
        "Building an app for streaming using Vue.js and WebRTC"
      ]
    }
  ];
}
</script>

<style lang="scss"></style>
