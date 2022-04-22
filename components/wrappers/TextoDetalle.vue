<template>
<div class="textoDetalle" :class="{fuenteMin:fuenteMin}" :style="{'width':ancho,'max-width':anchoMax}">
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

.textoDetalle{
  padding:0 4.5em;
  margin:auto;
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
    margin-bottom:1em;
  }
  ul.cita {
    li{
      @include letraNormal(normal,$fuenteMax - 0.2,$colorFondoPie);
      font-style:italic;
      margin-left:1.5em;
    }
    &.fuenteMed{
      li{
        @include letraNormal(normal,$fuenteMed - 0.1,$colorFondoPie);
      }
    }

  }

}

.textoDetalle.fuenteMin p{
  font-size:1.2em;
  text-align: justify;
}

@media  (max-width:800px) {
  .textoDetalle{
    ul.cita{
      &.fuenteMed{
        li{
          @include letraNormal(normal,$fuenteMin,$colorFondoPie);
        }
      }
    }
  }
}
</style>
