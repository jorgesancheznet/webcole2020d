<template>
  <PaginaNoticia titulo="Libros para el Curso 2023-24" subtitulo="Listado de ISBN" imagen="/img/textura1.jpg">
        <TextoDetalle>
          <p>Disponible el listado por especialidades de los libros para el curso 2023-2024</p>
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
