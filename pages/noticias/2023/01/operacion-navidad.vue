<template>
  <PaginaNoticia titulo="Operación Navidad 2022"
                 imagen="/img/textura1.jpg">
    <FilaContenido>
      <ColumnaContenido>
      <TextoDetalle>
        <p>Os dejamos un breve video de La Operación Navidad de 2022, ha sido un éxito y ha estado llena de diversión! Abriendo caminos hacia un futuro lleno de alegría y celebración, esta operación Navidad ha dejado una huella indeleble en nuestros corazones.</p>
      </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BNP91mvQyYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </ColumnaContenido>
    </FilaContenido>
  </PaginaNoticia>
</template>
<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";
import ContenedorVideos from "@/components/wrappers/ContenedorVideos";

export default {
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle,ContenedorVideos},
}
</script>

<style scoped>
iframe{
  max-width:500px;
}
</style>
