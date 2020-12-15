<template>
<div class="textoDetalle">
  <h3 v-if="titulo">{{titulo}}</h3>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "TextoDetalle",
  props:{
    titulo:String
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.textoDetalle{
  padding:0 3em;
  h3{
    @include letraNormal(bold,2em,$colorFondoPie);
    text-align: center;
    margin:0;
  }

}
</style>
