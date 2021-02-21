<template>
<section class="sticky" :style="{backgroundImage:`url(${urlImagen})`}">
  <h2 v-if="titulo">{{titulo}}</h2>
</section>
</template>

<script>
export default {
  name: "SeccionSticky",
  props:{
    titulo:String,
    urlImagen:String
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
.sticky{
  position: -webkit-sticky;
  position: sticky;
  top:40px;
  background: $colorFondoPie no-repeat center center;
  background-size: cover;
  height:100vh;
  padding:.5em 0 0 0;
  h2{
    position: sticky;
    top:80px;
    @include letraNormal(light,5em,white);
    text-align: center;
  }
}
</style>
