<template>
<div class="textoDetalle" :class="{fuenteMin:fuenteMin}" :style="{'width':ancho}">
  <h3 v-if="titulo">{{titulo}}</h3>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "TextoDetalle",
  props:{
    titulo:String,
    fuenteMin:{
      type:Boolean,
      default:false
    },
    ancho:{
      type:String,
      default:"auto"
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.textoDetalle{
  padding:0 4.5em;
  h3{
    @include letraNormal(bold,2em,$colorFondoPie);
    text-align: center;
    margin:0;
  }
  strong{
    @include negrita;
  }
  li{
    @include letraNormal(normal,1.2em,$colorFondoPie);
  }
}

.textoDetalle.fuenteMin p{
  font-size:1.2em;
  text-align: justify;
}
</style>
