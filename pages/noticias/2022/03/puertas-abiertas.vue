<template>
  <PaginaNoticia titulo="La evaluación como instrumento de aprendizaje"
                 imagen="/img/textura1.jpg">
    <FilaContenido>
      <TextoDetalle>
        <p><strong>Jornada de Puertas Abiertas</strong> para <strong>Educación Secundaria</strong> jueves 10 de marzo a las 17:00</p>
        <p>¡Ven a conocernos! Excelencia adaptada a cada estudiante</p>
        <p><a href="https://drive.google.com/file/d/1z0OphGRleE19RcYtIwSIEv-3dJwdYOst/view">Ver vídeo</a></p>
      </TextoDetalle>
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
