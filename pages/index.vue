<template>
  <main>
    <BarraSocial />
    <SplashPanel idSeccion="seccionPortada" imagen="/img/fondos/general.jpg" titulo="Excelencia adaptada<br>a cada estudiante" subtitulo="En búsqueda permanente de nuevos caminos que permitan el éxito educativo">
      <PanelNovedades titulo="ÚLTIMAS NOTICIAS" :entradas="listaNovedades" tiempoTransicion="1000"  tiempoAparicion="300" />
    </SplashPanel>

    <SeccionTransparente idSeccion="seccionNovedades" titulo="NOTICIAS">
      <ContenedorCarrusel :datos="listaNovedades" />
      <EnlaceBoton url="/noticias" texto="VER TODAS LAS NOTICIAS" />
    </SeccionTransparente>

    <SeccionInfo :informacion="listaInfoIndex">
      <EnlaceBoton url="/escuela/metodo" texto="VER MÁS SOBRE NUESTRO MÉTODO EDUCATIVO" />
    </SeccionInfo>

    <SeccionTransparente id-seccion="seccionOfertaEducativa" titulo="OFERTA EDUCATIVA">
      <ContenedorFichas :fichas="listaOferta"/>
    </SeccionTransparente>

    <SeccionOpaca idSeccion="seccionServicios" titulo="SERVICIOS">
      <ContenedorFichas :fichas="listaServicios" :mini="true"  />
    </SeccionOpaca>
  </main>
</template>

<script>
//librerías
import {mapMutations} from "vuex";

//Componentes
import Cabecera from "~/components/cabecera/Cabecera";
import SplashPanel from "~/components/secciones/SplashPanel";
import PanelNovedades from "@/components/items/PanelNovedades";
import ContenedorCarrusel from "~/components/wrappers/ContenedorCarrusel";
import SeccionTransparente from "~/components/secciones/SeccionTransparente";
import SeccionInfo from "~/components/secciones/SeccionInfo";
import ContenedorFichas from "~/components/wrappers/ContenedorFichas";
import SeccionOpaca from "@/components/secciones/SeccionOpaca";
import EnlaceBoton from "@/components/items/EnlaceBoton";


//datos
import {noticias} from "~/assets/data/noticias";
import {listaInfoIndex} from "~/assets/data/panelInfoIndex";
import {listaOfertaEducativa} from "~/assets/data/ofertaEducativa";
import {listaServicios} from "~/assets/data/servicios";
import BarraSocial from "../components/secciones/BarraSocial";


export default {
  components: {
    BarraSocial,
    SeccionOpaca,
    ContenedorFichas,
    SeccionInfo, SeccionTransparente, ContenedorCarrusel, PanelNovedades, SplashPanel, Cabecera, EnlaceBoton},
  computed:{
    fondo(){
      return this.$store.state.fondo
    }
  },
  data(){
    return{
      listaNovedades:noticias,
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
