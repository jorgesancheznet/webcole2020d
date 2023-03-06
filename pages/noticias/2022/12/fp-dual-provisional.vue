<template>
  <PaginaNoticia titulo="Candidatos a la FP Dual 2022-23" subtitulo="Listado provisional"
                 imagen="/img/escuela/documentos.jpg" >
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Listado provisional con las puntuaciones obtenidas por todos los candidatos a la FP Dual, curso 2022-23</p>
          <p><a href="https://drive.google.com/file/d/1R3rJA4RoqGUbccx66Ou1tMrVF79X5vDF/view?usp=sharing" target="_blank">Documento con el listado provisional de candidatos y puntos</a></p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Candidatos provisionales FP Dual" src="/img/noticias/2022/12/fp-dual-provisional.jpg"
        ancho-max="500px" enlace="https://drive.google.com/file/d/1R3rJA4RoqGUbccx66Ou1tMrVF79X5vDF/view?usp=sharing" />
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
