<template>
  <v-card class="project" width="325" min-height="290" @click="openProject(project.url)">
    <v-chip class="ma-2 project__chip" :color="project.status == 'Online' ? 'primary' : '#ff9b54'" x-small dark>
      {{ project.status }}
    </v-chip>
    <v-card-title>
      <v-img :src="project.logo" alt="Logo" max-width="74" class="mt-2"></v-img>
      <v-btn icon x-large class="ml-auto mb-auto" :disabled="project.source == ''" @click="openProject(project.source)">
        <v-icon color="#2C3E50">mdi-github</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="px-8 pb-0">
      <p class="project__title">{{ project.name }}</p>
      <p class="project__info">
        {{ project.description }}
      </p>
    </v-card-text>
    <v-card-actions class="pt-0">
      <v-chip small v-for="tech in project.technologies" :key="tech.name" color="#ECF1EB" class="mx-1">
        <v-img :src="require(`@/assets/images/${tech.src}`)" max-width="16" max-height="16" class="mr-1"></v-img>
        {{ tech.name }}
      </v-chip>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

interface IProject {
  name: string;
  description: string;
  logo: string;
  source: string;
  url: string;
  technologies: [{ name: string; src: string }];
  status: string;
}

@Component({})
export default class Project extends Vue {
  @Prop() private project!: IProject;
  private openProject(link: string) {
    if (link) window.open(link, "_blank");
  }
}
</script>

<style lang="scss" scoped>
.project {
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-15px);
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 100;
    letter-spacing: 1px;
    color: #00343d;
  }

  &__info {
    font-size: 0.8rem;
    font-weight: 100;
    letter-spacing: 1px;
    color: #00343d;
  }

  &__chip {
    position: absolute;
    top: -3px;
    left: -23px;
    transform: rotate(-20deg);
  }
}
</style>
