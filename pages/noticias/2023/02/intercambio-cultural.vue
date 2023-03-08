<template>
  <PaginaNoticia titulo="Intercambio cultural con Italia"
                 imagen="/img/textura1.jpg" subtitulo="Proyecto lingüístico">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Intercambio cultural con Italia. Los alumnos de 1° ESO del Centro Don Bosco de Villamuriel de Cerrato envían un mensaje de agradecimiento a profesores y estudiantes del <strong>collegio San Francesco de Lodi</strong> (Italia) por haberles elegido e incluido en su proyecto lingüístico. </p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <video width="320" height="240" controls>
          <source src="/img/noticias/2023/02/video01.mp4" type="video/mp4">
        </video>
      </ColumnaContenido>
    </FilaContenido>

  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";

export default {
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle}
}
</script>

<style scoped>

</style>
