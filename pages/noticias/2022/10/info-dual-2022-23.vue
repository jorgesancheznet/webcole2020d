<template>
  <PaginaNoticia titulo="Información sobre la FP Dual para Familias" subtitulo="Curso 2022/2023"
                 imagen="/img/escuela/documentos.jpg" >
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Publicamos un enlace que contiene un documento PDF con instrucciones a considerar para las familias en este curso 2022/23</p>
          <p><a href="https://drive.google.com/file/d/1cnSGiogY1lzZgC2Lfhbc2x2PwEht-0cA/view?usp=sharing" target="_blank">Documento sobre la FP Dual para el curso 2022/23</a></p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Información FP Dual" src="/img/noticias/2022/10/info-dual-2022.jpg"
        ancho-max="500px" enlace="https://drive.google.com/file/d/1cnSGiogY1lzZgC2Lfhbc2x2PwEht-0cA/view?usp=sharing" />
      </ColumnaContenido>
    </FilaContenido>
  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";
import ImagenDetalle from "@/components/items/ImagenDetalle";

export default {
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle, ImagenDetalle}
}
</script>

<style scoped>

</style>
