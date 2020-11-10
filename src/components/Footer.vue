<template>
  <div v-show="show">
    <v-footer class="indigo lighten-1 white--text mt-2" fixed app>
      <h3>2020 - Jade</h3>
    </v-footer>
  </div>
</template>
<script>
export default {
  props: ["show"]
};
</script>
<style lang="scss" scoped>
h3{
  margin:0 auto;
}
</style>
