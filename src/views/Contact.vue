<template>
  <div class="contact">
    <p class="contact__description text-center">Thanks for taking the time to reach out.</p>
    <v-form class="contact__form" lazy-validation ref="contact-form">
      <v-row no-gutters>
        <v-col cols="12" sm="6" class="px-2">
          <v-text-field
            :rules="[rules.required]"
            label="Your name"
            rounded
            filled
            @keydown.enter="sendMail"
            prepend-inner-icon="mdi-account"
            v-model="name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="px-2">
          <v-text-field
            :rules="[rules.mail]"
            label="Your email"
            rounded
            filled
            @keydown.enter="sendMail"
            prepend-inner-icon="mdi-email"
            v-model="mail"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="px-2">
          <v-textarea
            label="Your message"
            rounded
            filled
            prepend-inner-icon="mdi-message"
            auto-grow
            no-resize
            @keydown.enter.prevent="sendMail"
            v-model="message"
          ></v-textarea>
        </v-col>
        <v-col cols="12" class="text-center pt-2">
          <v-btn dark class="contact__submit px-12" :loading="loading" @click="sendMail">Submit</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { sendMail } from "@/services/mailgun";

@Component({})
export default class Contact extends Vue {
  $refs!: {
    "contact-form": HTMLFormElement;
  };
  private name = "";
  private mail = "";
  private message = "";
  private loading = false;
  private rules = {
    required: (value: string) => !!value || "Name is required",
    mail: (value: string) => {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || "Invalid email";
    }
  };

  private async sendMail() {
    if (this.$refs["contact-form"].validate()) {
      this.loading = true;
      try {
        const data = {
          name: this.name,
          email: this.mail,
          message: this.message
        };
        await sendMail(data);
        this.$notify({
          group: "feedback",
          duration: 10000,
          title: "Message received. Thanks!",
          text: "I'll be in touch with you shortly",
          type: "success"
        });
        this.$refs["contact-form"].reset();
      } catch (error) {
        this.$notify({
          group: "feedback",
          duration: 5000,
          title: "Error!",
          text: "Opps something went wrong, try it later",
          type: "error"
        });
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  display: grid;
  place-items: center;

  &__form {
    max-width: 600px !important;
    margin: 3rem 1.5rem 6rem;
  }

  &__description {
    font-size: 1.8rem;
    font-weight: 100;
    letter-spacing: 1.5px;
    color: #00343d;
    margin: 2rem 1rem;
  }

  &__submit {
    background: linear-gradient(90deg, #8ec590, #71af74);
    box-shadow: 0 0 4px 0 #8ec590;
  }
}
</style>
