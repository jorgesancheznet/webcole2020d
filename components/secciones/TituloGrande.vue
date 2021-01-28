<template>
<section class="tituloEstudios">
  <h1>
    {{titulo}}<br>
    <small v-if="subtitulo" class="subtituloEstudios">
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
  computed: {
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
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
.tituloEstudios{
  position:relative;
  height:70vh;
  background-color: transparent;
  text-align: center;
  h1{
    @include letraNormal(bold,5em,white);
    position:absolute;
    width:100%;
    text-align: center;
    bottom:0;
  }
  .subtituloEstudios{
    @include letraNormal(normal,.5em,white);
  }
}
@media  (max-width:800px) {
  .tituloEstudios {
    h1 {
      font-size: 2em;
    }
  }
}
</style>
