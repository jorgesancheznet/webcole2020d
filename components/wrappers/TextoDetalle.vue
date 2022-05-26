<template>
<div class="textoDetalle" :class="{fuenteMin:fuenteMin, fuenteMed:fuenteMed}" :style="{'width':ancho,'max-width':anchoMax}">
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
    fuenteMed:{
      type:Boolean,
      default:false
    },
    ancho:{
      type:String,
      default:"auto"
    },
    anchoMax:{
      type:String,
      default:"auto"
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
//estilos generales en PaginaNoticia
.textoDetalle{
  padding:0 4.5em;
  margin:auto;
  table{
    width:100%;
    tr{
      td,th{
        padding:.2em 1em;
      }
      td{
        @include letraNormal(normal,1.3em,black)
      }
      th{
        @include letraNormal(bold,1.3em,black);
        font-weight:bold;
      }
    }
  }
}

</style>
