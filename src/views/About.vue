<template>
  <div class="about">
    <v-row no-gutters justify="center">
      <v-col cols="12" sm="10" md="8">
        <p class="about__description text-center">Some Things I've Built</p>
        <v-row no-gutters>
          <v-col v-for="project in projects" :key="project.name" class="pa-4" cols="12" sm="12" md="6" lg="4">
            <project :project="project" class="mx-auto" />
          </v-col>
        </v-row>
        <p class="about__description text-center">Where I've Worked</p>
        <Tabs class="mx-6" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Project from "@/components/Project.vue";
import Tabs from "@/components/Tabs/Tabs.vue";

@Component({
  components: {
    Project,
    Tabs
  }
})
export default class About extends Vue {
  private projects = [
    {
      name: "Portfolio",
      description: "A single page web app for helping me organize my tasks, built with Nuxt.js, Firestore, and Vuetify",
      logo: require("../assets/images/logo.png"),
      source: "https://gitlab.com/totoz/day-tasks",
      technologies: [
        {
          name: "Vue.js",
          src: "vue-logo.png"
        },
        {
          name: "Vuetify",
          src: "vuetify.svg"
        },
        {
          name: "Typescript",
          src: "typescript.png"
        }
      ],
      status: "Online"
    },
    {
      name: "Avatar Maker",
      description: "A single page web app for the fing, built in Nuxt.js, Firebase, and Vuetify",
      logo: require("../assets/images/avatar.png"),
      source: "",
      technologies: [
        {
          name: "Vue.js",
          src: "vue-logo.png"
        },
        {
          name: "Vuetify",
          src: "vuetify.svg"
        },
        {
          name: "Typescript",
          src: "typescript.png"
        }
      ],
      status: "Dev"
    },
    {
      name: "Tasku",
      description: "A single page web app for helping me organize my projects, built in React",
      logo: require("../assets/images/tasku-logo.jpg"),
      source: "https://gitlab.com/totoz/engage-projects",
      technologies: [
        {
          name: "Vue.js",
          src: "vue-logo.png"
        },
        {
          name: "Vuetify",
          src: "vuetify.svg"
        },
        {
          name: "Typescript",
          src: "typescript.png"
        }
      ],
      status: "Dev"
    }
  ];
}
</script>

<style lang="scss" scoped>
.about {
  margin-bottom: 6rem;
  &__description {
    font-size: 1.8rem;
    font-weight: 100;
    letter-spacing: 1.5px;
    color: #00343d;
    margin: 4rem 0;
  }
}
</style>
