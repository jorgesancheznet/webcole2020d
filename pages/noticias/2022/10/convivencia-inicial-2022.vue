<template>
  <PaginaNoticia titulo="Semana de convivencias"
                 imagen="/img/fondos/fondo.jpg" subtitulo="Afianzando nuestra relación para el nuevo curso">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Durante la semana del 4 al 8 de octubre hemos celebrado una semana de convivencia, donde cada día ha sido protagonista uno de los cursos del centro
          </p>
          <p>Nuestros alumnos de <NuxtLink to="/estudios/carroceria">Carrocería</NuxtLink>, <NuxtLink to="/estudios/electromecanica">Electromecánica</NuxtLink>,
          <NuxtLink to="/estudios/telecomunicaciones">Telecomunicaciones</NuxtLink>, <NuxtLink to="/estudios/mantenimiento">Mantenimiento de Vehículos</NuxtLink>, <NuxtLink to="/estudios/asir">Administración de Sistemas Informáticos en Red (ASIR)</NuxtLink> y de <NuxtLink to="/estudios/eso">Educación Secundaria</NuxtLink> tuvieron un día dedicado a las convivencias
          </p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>
          Momentos para compartir, para formar equipo, para conocernos mejor, para hacer camino. Los chicos/as de la ESO han disfrutado de un día donde han participado y disfrutado de este encuentro en entornos tan bonitos y significativos como el histórico pueblo de Astudillo y el Soto Albúrez cercano a una de las esclusas más interesantes del Canal de Castilla.
        </p>
        </TextoDetalle>
      </ColumnaContenido>
    </FilaContenido>
    <TituloIndependiente titulo="FOTOS" id="t1"/>
    <SeccionOpaca colorFondo="#999999">
      <ContenedorFotos :fotos="fotos"/>
    </SeccionOpaca>
  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";
import ImagenDetalle from "@/components/items/ImagenDetalle";
import ContenedorFotos from "~/components/wrappers/ContenedorFotos";
import SeccionOpaca from "~/components/secciones/SeccionOpaca";
import TituloIndependiente from "~/components/wrappers/TituloIndependiente";
function getFotos(tam){
  let res=[];
  let iNorm=0;
  for (let i=0;i<tam;i++){
    iNorm=i+1;
    if(iNorm<10) iNorm="0"+iNorm;
    res[i]={
      rutaMini:`/img/noticias/2022/10/convivencias-${iNorm}-mini.jpg`,
      ruta:`/img/noticias/2022/10/convivencias-${iNorm}.jpg`,
      alt:`Convivencia inicial 2022/2023`,
      id:`foto${i+1}`
    }
  }
  return res;
}
export default {
  components: {
    PaginaNoticia,
    FilaContenido,
    ColumnaContenido,
    TextoDetalle,
    ImagenDetalle,
    ContenedorFotos,
    SeccionOpaca,
    TituloIndependiente
  },
  data() {
    return {
      fotos: getFotos(10)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/constantes.scss";
@import "~assets/estilos/mixins.scss";


</style>
