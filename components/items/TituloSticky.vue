<template>
  <div class="tituloSticky">
    <h2 v-if="titulo">{{titulo}}</h2>
  </div>
</template>

<script>
export default {
  name: "TituloSticky",
  props:{
    titulo:String
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.tituloSticky{
  height:100vh;
  position:sticky;
  top:80px;
  h2{
    position: sticky;
    @include letraNormal(light,5em,white);
    text-align: center;
  }
}
</style>
