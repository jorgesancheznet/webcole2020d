<template>
  <PaginaNoticia titulo="Centro de Excelencia Profesional, Don Bosco-Salesianos de Villamuriel"
                 imagen="/img/textura1.jpg">
    <FilaContenido>
      <TextoDetalle>
        <p>Presentamos un vídeo en el que hemos querido mostrar la personalidad de nuestro centro educativo.</p>
        <p>Podrás ver testimonios de madres, padres, alumnas y alumnos que describen su experiencia en su paso por el centro y observar cuáles son los pilares en los que radica nuestra visión de trabajo. </p>
        <p>Te descubrimos nuestros valores, nuestra propuesta educativa, la integración de metodologías activas, nuestros principales retos, los estudios que impartimos... en definitivo algunos de los principales elementos que hacen de nuestro centro, un centro de excelencia y de referencia en la zona.</p>
      </TextoDetalle>
    </FilaContenido>
    <FilaContenido>
      <iframe style="max-width:720px;margin:auto" width="560" height="315" src="https://www.youtube.com/embed/S27gPCkDVWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </FilaContenido>


  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";
import ContenedorVideos from "@/components/wrappers/ContenedorVideos";
import {noticias} from "assets/data/noticias";

export default {
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle,ContenedorVideos},
  data() {
    return {
      videos:[
        {
          ruta:"https://www.youtube.com/embed/cHdEr7stxIQ",
          title:"Innovación y digitalización"
        },
        {
          ruta:"https://www.youtube.com/embed/g0BcBoIaFAs",
          title:"Mediación"
        },
        {
          ruta:"https://www.youtube.com/embed/PuBQIsGe180",
          title:"Educando mente y corazón"
        },
        {
          ruta:"https://www.youtube.com/embed/cCW1TKsfSjc",
          title:"Testimonios"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
