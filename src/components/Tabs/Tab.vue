<template>
  <v-card flat tile class="card">
    <v-card-text>
      <p class="card__role">{{ role }}</p>
      <p class="card__date">{{ date }}</p>
      <ul>
        <li v-for="item in info" :key="item">
          <span class="card__info">
            {{ item }}
          </span>
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  props: {
    role: {
      type: String
    },
    date: {
      type: String
    },
    info: {
      type: Array
    }
  }
})
export default class Tab extends Vue {}
</script>

<style lang="scss" scoped>
.card {
  background: #ecf1eb;
  box-shadow: 0px 0px 3px 0px #608857 !important;
  .card__role {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: #00343d;
  }

  .card__date {
    font-size: 0.8rem;
    font-weight: 100;
    letter-spacing: 1.5px;
    color: #00343d;
  }

  .card__info {
    font-size: 0.8rem;
    font-weight: 100;
    color: #00343d;
  }
}
</style>
