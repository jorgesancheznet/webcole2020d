<template>
  <PaginaNoticia titulo="La evaluación como instrumento de aprendizaje"
                 imagen="/img/textura1.jpg">
    <FilaContenido>
      <TextoDetalle>
        <p>Vídeo en el que exponemos cómo entendemos la evaluación en nuestro centro. Coevaluación, autoevaluación, rúbricas, ... para hacer de la evaluación un instrumento a favor del aprendizaje.</p>
        <p>El plazo de admisión para cursar FP con nosotros se abre en la última semana de junio</p>
      </TextoDetalle>
    </FilaContenido>
    <FilaContenido>
        <div style="width: 80%;max-width:560px;min-height:700px;margin:auto;z-index:2001">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/t7mj2S8L-gw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
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
