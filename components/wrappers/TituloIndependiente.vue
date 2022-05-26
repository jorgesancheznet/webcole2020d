<template>
  <section :id="id" class="tituloIndependiente">
    <h1>{{titulo}}</h1>
  </section>
</template>

<script>
export default {
  name: "TituloIndependiente",
  props: {
    id:String,
    titulo:String
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.tituloIndependiente {
  position:relative;
  padding: 1em 0;
  background-color: transparent;
  h1 {
    @include letraNormal(normal,4em,$colorGrisSalesiano);
    text-align: center;
  }
}

</style>
