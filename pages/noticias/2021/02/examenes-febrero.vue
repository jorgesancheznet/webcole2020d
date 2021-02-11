<template>
  <PaginaNoticia titulo="Exámenes extraordinarios, Febrero 2021" subtitulo="5 de febrero de 2021" imagen="/img/textura1.jpg">
    <FilaContenido>
        <TextoDetalle>
        <p>Calendario de Exámenes Extraordinarios Febrero secciones ESO y FP 2020-2021</p>
          <p><a href="https://drive.google.com/file/d/1Ywt9ECRQYayUxq8kQe0LNvv5JTcM9Emx/view?usp=sharing">ver calendario exámenes ESO febrero 2021</a></p>
          <p><a href="https://drive.google.com/file/d/1mlv6qFl30hvU0xSNslmdnYeSjUuDImww/view?usp=sharing">ver calendario exámenes FP febrero 2021</a></p>
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
  components: {PaginaNoticia,FilaContenido,ColumnaContenido,TextoDetalle}
}
</script>

<style scoped>
  iframe{
    width:100%;
    height:400px;
  }
</style>
