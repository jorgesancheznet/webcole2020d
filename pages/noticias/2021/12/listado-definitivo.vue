<template>
  <PaginaNoticia titulo="Listado definitivo de candidatos a FP Dual" subtitulo="Fp Dual 2021/22"
                 imagen="/img/escuela/documentos.jpg" >
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Documento con el listado de alumnos candidatos a la FP Dual por especiales. Aparece la nota de baremación del proceso de selección</p>
          <p><a href="https://drive.google.com/file/d/1Pt6_FsWuU-CTIVfFGUbw-TxYrdvvaMMg/view?usp=sharing"  target="_blank">Documento con el listado definitivo de candidatos y la baremación final</a></p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Listado de empresas de Fp Dual" src="/img/noticias/2021/12/listado-definitivo.jpg"
        ancho-max="500px" enlace="https://drive.google.com/file/d/1Pt6_FsWuU-CTIVfFGUbw-TxYrdvvaMMg/view?usp=sharing" />
      </ColumnaContenido>
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
