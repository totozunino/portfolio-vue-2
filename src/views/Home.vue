<template>
  <div class="home text-center">
    <h1 class="home__title">&lt; Mathias Zunino /></h1>
    <v-avatar size="250" class="home__avatar">
      <v-img src="@/assets/images/avatar.jpg" alt="avatar" />
    </v-avatar>
    <div class="ma-auto pt-6" :style="$vuetify.breakpoint.xsOnly ? 'width: 340px' : 'width: 545px'">
      <p class="home__description mb-6">
        Hello! I'm Mathias, a Full Stack Developer based in Canelones, UY. I enjoy coding and creating whether that be
        applications, websites, or anything in between.
      </p>
      <p class="home__techs mb-6">Technologies I've been working with recently:</p>
      <ul class="pl-14">
        <li v-for="tech in technologies" :key="tech">
          <span style="color: #00343d">
            {{ tech }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  private technologies = ["Javascript (ES6+)", "Vue", "Node", "HTML & (S)CSS", "Flutter", "React"];
}
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  margin-left: auto;
  width: fit-content;
}

li {
  list-style-type: square;
  color: #648b5b;
  width: fit-content;
}

.home {
  margin-bottom: 6rem;

  &__title {
    font-weight: 100;
    font-size: 2rem;
    letter-spacing: 1.5px;
    margin: 3rem 0 2.5rem;
    color: #00343d;
  }

  &__avatar {
    border: 3px solid #ecf1eb;
  }

  &__description {
    font-size: 1rem;
    font-weight: 100;
    letter-spacing: 1.5px;
    color: #00343d;
    background: #ecf1eb;
    border-left: 3px solid #648b5b;
    padding: 5px;
    border-radius: 4px;
  }

  &__techs {
    letter-spacing: 1.5px;
    color: #00343d;
  }
}
</style>
