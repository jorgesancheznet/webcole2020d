<template>
  <PaginaNoticia titulo="Jornada de Puertas Abiertas, ESO"
                 imagen="/img/textura1.jpg">
    <FilaContenido>
      <TextoDetalle>
        <p>En una sociedad cada vez más compleja que avanza a pasos agigantados hacia el mundo digital y las nuevas
          tecnologías. Nuestro centro apuesta por un aprendizaje que desarrolla habilidades y competencias
          indispensables para la sociedad del S.XXI, con una visión creativa, social e inclusiva.</p>
        <p>La Innovación Educativa forma parte de los grandes planes de acción que estamos desarrollando en nuestro
          centro, coherentes con los valores de nuestra Propuesta Educativa.</p>
        <p>Poseemos un amplio recorrido en la integración de nuevas metodologías y en la incorporación de las TICs
          (reconocimiento Codice TIC con nivel máximo) a nuestro proceso de enseñanza-aprendizaje. Además, este
          curso la Junta de Castilla y León nos ha seleccionado como único centro de secundaria en la provincia de
          Palencia para formar parte del proyecto de innovación educativa: <strong>Espacios Flexibles de Formación y
          aprendizaje</strong> que promueve la transformación de la enseñanza para que el alumno sea protagonista de su propio
          aprendizaje.</p>
        <p>Apostamos por el aprendizaje individualizado y adaptado a las necesidades de cada alumno, lo que permite alcanzar los máximos niveles
          de aprendizaje.</p>
        <p>Somos un centro con proyección profesional. Nuestra oferta educativa ofrece Ciclos formativos de grado medio y
          superior y FPB. Contamos con programas <NuxtLink to="/escuela/erasmus">Erasmus+</NuxtLink> y
          <NuxtLink to="/escuela/fp-dual">FP Dual</NuxtLink> y poseemos reconocimiento como
          <NuxtLink to="/escuela/excelencia">Centro de excelencia
            profesional de alto nivel
          </NuxtLink>.</p>
        <p>Si quieres saber más puedes descargar nuestro
          <NuxtLink to="/docs/Folleto-ESO.pdf" target="_blank" >folleto informativo</NuxtLink></p>
      </TextoDetalle>
    </FilaContenido>
    <ContenedorVideos :videos="videos"></ContenedorVideos>


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
