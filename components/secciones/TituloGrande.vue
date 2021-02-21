<template>
<section class="tituloGrande" :style="`backgroundImage:url(${imagen})`">
  <h1>
    {{titulo}}<br>
    <small v-if="subtitulo" class="subtituloGrande">
      {{subtitulo}}
    </small>
  </h1>
</section>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "TituloGrande",
  props:{
    titulo:String,
    subtitulo:String,
    imagen:{
      type:String,
      default:"/img/fondos/general.jpg"
    }
  },
  /*computed: {
    fondo() {
      return this.$store.state.fondo
    }
  },
  methods:{
    ...mapMutations([
      "cambiarFondo"
    ])
  },
  mounted(){
    this.cambiarFondo(this.imagen);
  }*/
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
.tituloGrande{
  position:relative;
  height:70vh;
  background: transparent center center no-repeat fixed;
  background-size:cover;
  text-align: center;
  h1{
    @include letraNormal(bold,5em,white);
    position:absolute;
    width:100%;
    text-align: center;
    bottom:0;
  }
  .subtituloGrande{
    @include letraNormal(normal,.5em,white);
  }
}
@media  (max-width:800px) {
  .tituloGrande {
    h1 {
      font-size: 2em;
    }
  }
}
</style>
