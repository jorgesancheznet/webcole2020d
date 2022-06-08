<template>
  <PaginaNoticia titulo="Graduación, curso 2021/22"
                 imagen="/img/fondos/textura-luces.jpg" subtitulo="Fiesta para celebrar la titulación de nuestro alumnado">
    <FilaContenido>
      <ColumnaContenido>
        <ImagenDetalle src="/img/noticias/2022/06/graduacion-22-00.jpg"
                       alt="Fiesta de Graduación 2022" anchoMax="1200px"/>
      </ColumnaContenido>
      <ColumnaContenido>
        <TextoDetalle :fuenteMed="true">
          <p>El día 3 de Junio se realizó la Fiesta de Graduación para celebrar la culminación de los estudios de nuestros
            alumnos de <NuxtLink to="/estudios/eso">Educación Secundaria</NuxtLink>, <NuxtLink to="/estudios/mantenimiento">
              Formación Profesional Básica en Mantenimiento de Vehículos </NuxtLink>, los ciclos
            de Grado Medio en <NuxtLink to="/estudios/carroceria">Carrocería</NuxtLink>, <NuxtLink to="/estudios/electromecanica">
              Electromecánica </NuxtLink> y <NuxtLink to="/estudios/telecomunicaciones">Telecomunicaciones</NuxtLink>, así
            como del Ciclo de Grado Superior en <NuxtLink to="/estudios/asir">Administracuón en Sistemas Informáticos en Red.</NuxtLink>
          </p>
          <p>Dispones de todas las fotos de la Graduación en nuestro <a href="https://flic.kr/s/aHBqjzSVms" target="_blank">Flickr</a></p>
        </TextoDetalle>
      </ColumnaContenido>
    </FilaContenido>
  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";
import ImagenDetalle from "@/components/items/ImagenDetalle";
import TituloIndependiente from "@/components/wrappers/TituloIndependiente";

export default {
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle, ImagenDetalle, TituloIndependiente},
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/constantes.scss";
@import "~assets/estilos/mixins.scss";


</style>
