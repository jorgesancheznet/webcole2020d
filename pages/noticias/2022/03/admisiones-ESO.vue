<template>
  <PaginaNoticia titulo="Periodo de admisiones para estudiar la ESO"
                 imagen="/img/textura1.jpg" subtitulo="¿Quieres estudiar con nosotros?">
    <FilaContenido>
      <TextoDetalle>
        <p>Hemos abierto el periodo de admisiones para la ESO. El plazo es del 18 marzo al 6 de abril, en la
          Secretaría del Centro Don Bosco de 9:30h a 13:30h. Si quieres más información puedes llamar
          al teléfono <a ref="tel:+34979777270">979777270</a></p>
      </TextoDetalle>
      <ImagenDetalle src="/img/noticias/2022/03/admisiones-ESO.jpeg" alt="Admisiones ESO" />
    </FilaContenido>



  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";
import ImagenDetalle from "@/components/items/ImagenDetalle";

export default {
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle, ImagenDetalle},
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
