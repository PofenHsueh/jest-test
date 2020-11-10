<template>
  <v-container fluid>
    <Header item="face"></Header>
    <div>
      <v-btn @click="count" color="secondary">Count</v-btn>
      <h1>{{ counter }}</h1>
    </div>
    <v-btn @click="login" color="primary">跳轉</v-btn>
  </v-container>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
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
