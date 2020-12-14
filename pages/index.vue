<template>
  <main>
    <SplashPanel idSeccion="seccionPortada" imagen="/img/neonbrand-426918-unsplash.jpg" titulo="Excelencia adaptada<br>a cada estudiante" subtitulo="En búsqueda permanente de nuevos caminos que permitan el éxito educativo">
      <PanelNovedades titulo="NOVEDADES" :entradas="listaNovedades" tiempoTransicion="1000"  tiempoAparicion="300" />
    </SplashPanel>

    <SeccionTransparente idSeccion="seccionNovedades" titulo="NOTICIAS">
      <ContenedorCarrusel :datos="listaNovedades" />
    </SeccionTransparente>

    <SeccionInfo :informacion="listaInfoIndex"/>

    <SeccionTransparente id-seccion="seccionOfertaEducativa" titulo="OFERTA EDUCATIVA">
      <ContenedorFichas :fichas="listaOferta"></ContenedorFichas>
    </SeccionTransparente>

    <SeccionOpaca idSeccion="seccionServicios" titulo="SERVICIOS">
      <ContenedorFichas :fichas="listaServicios" :mini="true" />
    </SeccionOpaca>
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
import ContenedorFichas from "~/components/wrappers/ContenedorFichas";
import SeccionOpaca from "@/components/secciones/SeccionOpaca";


//datos
import {listaNovedades} from "~/assets/data/novedades";
import {listaInfoIndex} from "~/assets/data/panelInfoIndex";
import {listaOfertaEducativa} from "~/assets/data/ofertaEducativa";
import {listaServicios} from "~/assets/data/servicios";


export default {
  components: {
    SeccionOpaca,
    ContenedorFichas,
    SeccionInfo, SeccionTransparente, ContenedorCarrusel, PanelNovedades, SplashPanel, Cabecera},
  computed:{
    fondo(){
      return this.$store.state.fondo
    }
  },
  data(){
    return{
      listaNovedades:listaNovedades,
      listaInfoIndex:listaInfoIndex,
      listaOferta:listaOfertaEducativa,
      listaServicios:listaServicios
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
