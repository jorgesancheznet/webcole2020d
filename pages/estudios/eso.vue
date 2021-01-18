<template>
  <main>
    <TituloEstudios titulo="Educación Secundaria" subtitulo="ESO" />

  </main>
</template>

<script>

//librerías
import {mapMutations} from "vuex";

import TituloEstudios from "@/components/secciones/TituloEstudios";

import ContenedorFotos from "../../components/wrappers/ContenedorFotos";

export default {
  name: "eso",
  data(){
    return{

    }
  },
  head(){
    return{
      title:"Educación Secundaria Obligatoria (ESO), Salesianos Centro Don Bosco de Villamuriel de Cerrato"
    }
  },
  components: {
    TituloEstudios
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
    this.cambiarFondo("/img/ciclos/fondo-eso.jpg");
  }
}
</script>
