<template>
  <main>
    <SplashPanel idSeccion="Portada" imagen="/img/neonbrand-426918-unsplash.jpg" titulo="Excelencia adaptada<br>a cada estudiante" subtitulo="En búsqueda permanente de nuevos caminos que permitan el éxito educativo">
      <PanelNovedades titulo="NOVEDADES" :entradas="listaNovedades" tiempoTransicion="1000"  tiempoAparicion="300" />

    </SplashPanel>
  </main>
</template>

<script>
import Cabecera from "~/components/cabecera/Cabecera";
import SplashPanel from "~/components/secciones/SplashPanel";
import PanelNovedades from "~/components/PanelNovedades";

import {listaNovedades} from "~/assets/data/novedades";
import {mapMutations} from "vuex";

export default {
  components: {PanelNovedades, SplashPanel, Cabecera},
  computed:{
    fondo(){
      return this.$store.state.fondo
    }
  },
  data(){
    return{
      listaNovedades:listaNovedades.slice(0,3)
    }
  },
  methods:{
    ...mapMutations([
      "cambiarFondo"
    ])
  },
  mounted(){
    this.cambiarFondo("/img/fondo.jpg");
  }
}
</script>

<style lang="scss" scoped>
</style>
