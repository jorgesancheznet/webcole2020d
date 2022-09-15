<template>
<div class="textoDetalle" :class="{fuenteMin:fuenteMin, fuenteMed:fuenteMed}" :style="{'width':ancho,'max-width':anchoMax}">
  <h3 v-if="titulo" :class="{tituloGrande:tituloGrande}">{{titulo}}</h3>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "TextoDetalle",
  props:{
    titulo:String,
    tituloGrande:{
      type:Boolean,
      default:false
    },
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
  h3{
    text-align: center;
    font-size:2.2em;
    margin:.2em 0;
    @include letraNormal(normal,2.2em,black);
  }
  h4{
    text-align: left;
    font-size:2em;
    margin:.2em 0;
  }

}

</style>
