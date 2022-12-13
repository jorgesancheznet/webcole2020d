<template>
  <main>
    <BarraSocial/>
    <SplashPanel idSeccion="seccionPortada" imagen="/img/fondos/fondo2.jpg"
                 titulo="Excelencia adaptada<br>a cada estudiante"
                 subtitulo="En búsqueda permanente de nuevos caminos que permitan el éxito educativo">
      <PanelNovedades titulo="ÚLTIMAS NOTICIAS" :entradas="listaNovedades" tiempoTransicion="1000"
                      tiempoAparicion="300"/>
    </SplashPanel>

    <SeccionTransparente idSeccion="seccionNovedades" titulo="NOTICIAS">
      <ContenedorCarrusel :datos="listaNovedades"/>
      <EnlaceBoton url="/noticias" texto="VER TODAS LAS NOTICIAS"/>
    </SeccionTransparente>

    <SeccionInfo :informacion="listaInfoIndex">
      <EnlaceBoton url="/escuela/metodo" texto="VER MÁS SOBRE NUESTRO MÉTODO EDUCATIVO"/>
    </SeccionInfo>

    <SeccionTransparente id-seccion="seccionOfertaEducativa" titulo="OFERTA EDUCATIVA">
      <ContenedorFichas :fichas="listaOferta"/>
    </SeccionTransparente>
º
    <SeccionOpaca idSeccion="seccionServicios" titulo="SERVICIOS">
      <ContenedorFichas :fichas="listaServicios" :mini="true"/>
    </SeccionOpaca>

    <SeccionTransparente id-seccion="seccionMeritos" titulo="NUESTROS MÉRITOS">
      <ContenedorFichas :fichas="listaMeritos" :mini="false"/>
    </SeccionTransparente>


  </main>
</template>

<script>
//librerías
import {mapMutations} from "vuex";

//Componentes
import Cabecera from "~/components/cabecera/Cabecera";
import SplashPanel from "~/components/secciones/SplashPanel";
import SplashNoticia from "~/components/secciones/SplashNoticia";
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
import {listaMeritos} from "~/assets/data/meritos";
import BarraSocial from "../components/secciones/BarraSocial";


export default {
  components: {
    SplashNoticia,
    BarraSocial,
    SeccionOpaca,
    ContenedorFichas,
    SeccionInfo, SeccionTransparente, ContenedorCarrusel, PanelNovedades, SplashPanel, Cabecera, EnlaceBoton
  },
  computed: {
    fondo() {
      return this.$store.state.fondo
    }
  },
  data() {
    return {
      listaNovedades: noticias.slice(0,10),//ultimas 10 noticias
      listaInfoIndex: listaInfoIndex,
      listaOferta: listaOfertaEducativa,
      listaServicios: listaServicios,
      listaMeritos: listaMeritos,
      esSafari:{
        default:false,
        type:Boolean
      }
    }
  },
  methods: {
    cerrarNoticiaSplash() {
      let splashNoticia = document.querySelector(".splashNoticia");
      if (splashNoticia) {
        document.body.removeChild(splashNoticia);
      }
    }
  }
}




</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

main{
  background-image: url("/img/fondos/fondo3.jpg");
}
/*------------Clase Splash------------------*/
.noticiaSplash{
  background-color:$colorFondoServicios;
  padding:1em;
  text-align: center;
  color:black;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius:1em;

  h4{
    @include letraNormal(bold,3em,black);
    margin:0;
  }
  p{
    @include letraNormal(normal,1.5em,black);
    margin:0;
  }
  a{
    color:white;
    font-size:1em;
    &:hover{
      text-decoration: underline;
    }
  }
}
</style>
