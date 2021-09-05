<template>
  <PaginaNoticia titulo="Nuevo plazo de admisión en Ciclos de FP: del 07 al 10 de septiembre" subtitulo="Curso 2021/2022"
                 imagen="/img/escuela/documentos.jpg" >
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Publicamos un enlace que contiene un documento PDF con instrucciones sobre la admisión en FP para este curso 2021/22</p>
          <p><a href="https://drive.google.com/file/d/12w9DDifSo-EKhy10MJTcX_IKlxsSeO1Z/view?usp=sharing" target="_blank">Documento con instrucciones para la admisión en FP, curso 2021/22</a></p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Formulario de Matrícula" src="/img/noticias/2021/06/fp-online.jpg"
        ancho-max="500px" enlace="https://drive.google.com/file/d/12w9DDifSo-EKhy10MJTcX_IKlxsSeO1Z/view?usp=sharing" />
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
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle}
}
</script>

<style scoped>

</style>
