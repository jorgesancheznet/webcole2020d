<template>
  <PaginaNoticia titulo="Exámenes finales de 2º de ASIR" subtitulo="Junio de 2021" imagen="/img/textura1.jpg">
    <FilaContenido>
      <TextoDetalle>
        <p>Calendario de Exámenes Finales para los alumnos de 2º de ASIR, curso 2020-2021</p>
        <p><a href="https://drive.google.com/file/d/1lIrLa2RDXo0lyOCeq10yvW0euc9eFX3X/view?usp=sharing" target="_blank">Ver calendario
          de exámenes</a></p>
      </TextoDetalle>
    </FilaContenido>
  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/TextoDetalle";


export default {
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle}
}
</script>

<style scoped>
iframe {
  width: 100%;
  height: 400px;
}
</style>
