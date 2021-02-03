<template>

  <SeccionOpaca style="margin-top:200px">
    <h1>{{this.slug}}</h1>
  </SeccionOpaca>
</template>

<script>
import SeccionOpaca from "../../components/secciones/SeccionOpaca";
export default {
  components: {SeccionOpaca},
  async asyncData({params}){
    const slug=params.slug;
    return {slug}
  },

}
</script>

<style scoped>

</style>
