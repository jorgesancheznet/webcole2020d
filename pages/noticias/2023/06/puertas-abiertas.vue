<template>
  <PaginaNoticia titulo="Semana de puertas abiertas" subtitulo="Ven a conocernos" imagen="/img/textura1.jpg">
    <FilaContenido>
        <TextoDetalle>
          <p>Esta semana, del 13 al 17 de junio de 2023, abrimos las puertas a las familias que deseen visitarnos</p>
          <p>Tenéis la posibilidad de realizar visitas concertadas, no lo dudes llama al <a href="tel:979777270">979 77 72 70</a></p>
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
import ContenedorVideos from "~/components/wrappers/ContenedorVideos.vue";

export default {
  components: {ContenedorVideos, PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle},
  data() {
    return {
      videos:[
        {
          ruta:"https://www.youtube.com/embed/S27gPCkDVWs",
          title:"Centro de Excelencia Educativa"
        },
        {
          ruta:"https://www.youtube.com/embed/v93_xLpi9l0",
          title:"FP oferta educativa"
        },
        {
          ruta:"https://www.youtube.com/embed/cHdEr7stxIQ",
          title:"Innovación y digitalización"
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
iframe{
  width:100%;
  height:400px;
  overflow: auto;
  border:none;
  text-align: center;
}
</style>
