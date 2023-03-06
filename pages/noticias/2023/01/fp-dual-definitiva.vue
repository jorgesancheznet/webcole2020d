<template>
  <PaginaNoticia titulo="Relación definitiva dfe alumnos curso 2022-23" subtitulo="FP Dual"
                 imagen="/img/escuela/documentos.jpg" >
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Relación definitiva de alumnos y empresas colaboradoras que van a desarrollar el programa de FpDual durante el curso 2022/23, en los diferentes ciclos formativos.</p>
          <p><a href="https://drive.google.com/file/d/1eX1r2SVDTxo0dZO-cAUojwFPGxD4l-8g/view?usp=sharing" target="_blank">Relación definitiva de alumnos, ciclo de Carrocería</a></p>
          <p><a href="https://drive.google.com/file/d/1gEN7D21UUuyo2C4NOiDCwgmiBGGggZ4T/view?usp=sharing" target="_blank">Relación definitiva de alumnos, ciclo de Electromecánica</a></p>
          <p><a href="https://drive.google.com/file/d/14Dsz6GPl06w4JQv1IZEBDd9X69ULAQQv/view?usp=sharing" target="_blank">Relación definitiva de alumnos, ciclo de Telecomunicaciones</a></p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Relación definitiva FP Dual" src="/img/noticias/2023/01/fp-dual-definitivo.jpg"
        ancho-max="500px" />
      </ColumnaContenido>
    </FilaContenido>
  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "~/components/secciones/PaginaNoticia";
import FilaContenido from "~/components/wrappers/FilaContenido";
import ColumnaContenido from "~/components/wrappers/ColumnaContenido";
import TextoDetalle from "~/components/wrappers/TextoDetalle";
import ImagenDetalle from "~/components/items/ImagenDetalle";

export default {
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle, ImagenDetalle}
}
</script>

<style scoped>

</style>
