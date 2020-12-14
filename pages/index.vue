<template>
  <main>
    <SplashPanel idSeccion="seccionPortada" imagen="/img/neonbrand-426918-unsplash.jpg" titulo="Excelencia adaptada<br>a cada estudiante" subtitulo="En búsqueda permanente de nuevos caminos que permitan el éxito educativo">
      <PanelNovedades titulo="NOVEDADES" :entradas="listaNovedades" tiempoTransicion="1000"  tiempoAparicion="300" />
    </SplashPanel>

    <SeccionTransparente idSeccion="seccionNovedades" titulo="NOTICIAS">
      <ContenedorCarrusel :datos="listaNovedades" />
    </SeccionTransparente>

    <SeccionInfo :informacion="listaInfoIndex"/>
  </main>
</template>

<script>
//librerías
import {mapMutations} from "vuex";

//Componentes
import Cabecera from "~/components/cabecera/Cabecera";
import SplashPanel from "~/components/secciones/SplashPanel";
import PanelNovedades from "~/components/PanelNovedades";
import ContenedorCarrusel from "~/components/wrappers/ContenedorCarrusel";
import SeccionTransparente from "~/components/secciones/SeccionTransparente";
import SeccionInfo from "~/components/secciones/SeccionInfo";

//datos
import {listaNovedades} from "~/assets/data/novedades";
import {listaInfoIndex} from "~/assets/data/panelInfoIndex";

export default {
  components: {SeccionInfo, SeccionTransparente, ContenedorCarrusel, PanelNovedades, SplashPanel, Cabecera},
  computed:{
    fondo(){
      return this.$store.state.fondo
    }
  },
  data(){
    return{
      listaNovedades:listaNovedades,
      listaInfoIndex:listaInfoIndex,
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
