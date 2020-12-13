<template>
<section :id="idSeccion" class="seccionTransparent">
  <h1>{{titulo}}</h1>
  <slot></slot>
</section>
</template>

<script>
export default {
  name: "SeccionTransparente",
  props:{
    titulo:String,
    idSeccion:String
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
section{
  h1{
    margin:2em 0;
    @include letraNormal(normal,4em,$colorFicha);
    text-align: center;
  }
}
</style>
