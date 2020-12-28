<template>
<article class="contenedorListaAspectos">
  <h3 v-if="titulo" data-aos="flip-left" data-aos-duration="1500">
    <span class="iconoListaAspectos" v-if="entrada">
      <IconoSVG :ancho="25" :d="signInAlt.d" :viewBox="signInAlt.viewBox" />
    </span>
    <span class="iconoListaAspectos iconoSalir" v-else-if="salida">
      <IconoSVG :ancho="25" :d="signOutAlt.d" :viewBox="signOutAlt.viewBox" />
    </span>
    {{titulo}}
  </h3>
  <slot></slot>
</article>
</template>

<script>


import {signInAlt,signOutAlt} from "~/assets/svg/iconos"
import IconoSVG from "@/components/items/IconoSVG";

export default {
  name: "ContenedorListaAspectos",
  components: {IconoSVG},
  data(){
    return{
      signInAlt:signInAlt,
      signOutAlt:signOutAlt
    }
  },
  props:{
    titulo:String,
    entrada:{
      type:Boolean,
      default:false
    },
    salida:{
      type:Boolean,
      default:false
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
.contenedorListaAspectos {
  display: inline-block;

  h3 {
    @include letraNormal(normal, 2.2em, $colorFondoPie);
    text-align: center;
    margin: 0;
  }
  p{
    padding-left:2em;
  }
  .iconoSalir svg{
    transform:rotate(180deg);
  }
}

.iconoListaAspectos{
  fill:$colorTenue;
}
</style>
