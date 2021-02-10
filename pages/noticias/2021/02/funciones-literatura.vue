<template>
  <PaginaNoticia titulo="Las funciones de la literatura" subtitulo="2 de febrero de 2021" imagen="/img/textura1.jpg">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
        <p>Nuestr@s chic@s de 1° ESO nos explican y ejemplifican algunas de las funciones de la literatura utilizando la herramienta Croma.</p>
        <p>En este proyecto han integrado y trabajado competencias como la Comunicación, Creatividad y Trabajo en Equipo. Enhorabuena!</p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <iframe src="https://www.youtube.com/embed/E66oCbbmAKo" frameborder="0" width="460" height="215"></iframe>
        </TextoDetalle>
      </ColumnaContenido>
    </FilaContenido>
  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/TextoDetalle";

export default {
  components: {PaginaNoticia,FilaContenido,ColumnaContenido,TextoDetalle}
}
</script>

<style scoped>
  iframe{
    width:100%;
    height:400px;
  }
</style>
