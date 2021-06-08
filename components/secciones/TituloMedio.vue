<template>
<section class="tituloMedio">
  <header>
    <h1>
      {{titulo}}
    </h1>
    <p v-if="subtitulo" class="subtituloMedio">
      {{subtitulo}}
    </p>
  </header>
</section>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "TituloMedio",
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
.tituloMedio{
  position:relative;
  height:43vh;
  background-color: transparent;
  text-align: center;
  header{
    position:absolute;
    bottom:0;
    width:100%;
    text-align: center;
  }
  h1{
    @include letraNormal(bold,7vh,white);
    width:100%;
    text-align: center;
    margin:0;
  }
  .subtituloMedio{
    @include letraNormal(normal,4vh,white);
    width:100%;
    text-align: center;
    margin:0 0 1em 0;
  }
}
@media  (max-width:800px) {
  .tituloMedio {
    h1 {
      font-size: 5vh;
    }
    .subtituloMedio{
      font-size: 3vh;
    }
  }
}
</style>
