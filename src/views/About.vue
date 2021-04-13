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
      description: "Personal web app built with Vue.js and Vuetify",
      logo: require("../assets/images/logo.png"),
      source: "https://github.com/totozunino/portfolio",
      url: "",
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
      description: "An app to customize a fun avatar, built in Vue.js and Vuetify",
      logo: require("../assets/images/avatar.png"),
      source: "https://github.com/totozunino/avatar-maker",
      url: "https://avatar-maker-2ba67.web.app/",
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
      name: "Tasku",
      description:
        "A single page web app for helping me organize my tasks, built with Vue.js, Firebase and Tailwind CSS",
      logo: require("../assets/images/tasku-logo.jpg"),
      source: "",
      url: "",
      technologies: [
        {
          name: "Vue.js",
          src: "vue-logo.png"
        },
        {
          name: "Firebase",
          src: "fb.png"
        },
        {
          name: "tailwindcss",
          src: "tailwindcss.svg"
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
