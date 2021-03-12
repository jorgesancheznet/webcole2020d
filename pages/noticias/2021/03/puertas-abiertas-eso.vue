<template>
  <PaginaNoticia titulo="Jornada de puertas abiertas" subtitulo="Del 19 de marzo al 6 de abril" imagen="/img/textura1.jpg">
    <div style="width: 80%;margin:auto;z-index:2001">
      <div style="position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;">
        <iframe frameborder="0" width="1200" height="675"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                src="https://view.genial.ly/60369a65e1a03e0d978ac9a3" type="text/html" allowscriptaccess="always"
                allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe>
      </div>
    </div>
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

</style>
