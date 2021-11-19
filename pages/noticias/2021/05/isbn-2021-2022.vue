<template>
  <PaginaNoticia titulo="Libros para el Curso 2021-22" subtitulo="Listado de ISBN" imagen="/img/textura1.jpg">
        <TextoDetalle>
          <p>Listado por especialidades de los libros para el curso 2021-2022</p>
        </TextoDetalle>
        <iframe src="https://drive.google.com/embeddedfolderview?id=16nShiA2FMccXG8qpbG6kziO7aDZLcMSx#grid"></iframe>
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
iframe{
  width:100%;
  height:400px;
  overflow: auto;
  border:none;
  text-align: center;
}
</style>
