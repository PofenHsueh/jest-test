<template>
  <div>
    <v-toolbar color="#FF9100" class="white--text">
      <v-toolbar-title>Unit Test - Jest</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-{{ item }}</v-icon>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  props: ["item"]
};
</script>
<style lang="scss" scoped></style>
