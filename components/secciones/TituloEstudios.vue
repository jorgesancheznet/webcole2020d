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
export default {
  name: "TituloEstudios",
  props:{
    titulo:String,
    subtitulo:String,
    fondo:String
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
    this.cambiarFondo("/img/ciclos/fondo-asir.jpg");
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
