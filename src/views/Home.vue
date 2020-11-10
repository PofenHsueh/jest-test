<template>
  <div>
    <Header item="face"></Header>
    <div class="ma-2">
      <v-btn @click="count" color="secondary">Count</v-btn>
      <h1>{{ counter }}</h1>
    </div>
    <v-btn @click="login" color="primary" class="ma-2">跳轉</v-btn>
    <Footer :show="true"></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    count() {
      this.counter += 2;
    },
    login() {
      this.$router.push("/about");
    }
  }
};
</script>
