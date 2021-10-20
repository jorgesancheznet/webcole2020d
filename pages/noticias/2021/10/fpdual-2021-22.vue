<template>
  <PaginaNoticia titulo="Información sobre la FP Dual para Familias" subtitulo="Curso 2021/2022"
                 imagen="/img/escuela/documentos.jpg" >
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Publicamos un enlace que contiene un documento PDF con instrucciones a considerar para las familias en este curso 2021/22</p>
          <p><a href="https://drive.google.com/file/d/1pjxqO6s9EP_uT5Bqi9UO8KF80I_L-7fU/view?usp=sharing" target="_blank">Documento sobre la FP Dual para el curso 2021/22</a></p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Información FP Dual" src="/img/noticias/2021/10/info-fpdual-blur.jpg"
        ancho-max="500px" enlace="https://drive.google.com/file/d/1pjxqO6s9EP_uT5Bqi9UO8KF80I_L-7fU/view?usp=sharing" />
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
