<template>
  <PaginaNoticia titulo="Listados con las admisiones en ciclos de FP" subtitulo="Curso 2022/23"
                 imagen="/img/escuela/documentos.jpg" >
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Tenemos disponibles los listados con las admisiones (a fecha de 21 de Julio de 2022) en los ciclos de formación profesional </p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p><a href="https://drive.google.com/file/d/1OgI6nTL6h2itxB7cnsYb02Mvl9ofHMbz/view?usp=sharing">Documento con la admisión en Ciclos Formativos de Grado Básico</a></p>
          <p><a href="https://drive.google.com/file/d/1l54e6MFwRmllfYkp5S9gO0D0IHKgQdI9/view?usp=sharing">Documento con la admisión en Ciclos Formativos de Grado Medio y Superior</a></p>
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

export default {
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle}
}
</script>

<style scoped>

</style>
