<template>
  <PaginaNoticia titulo="Listado de empresas de FP Dual" subtitulo="Listado de empresas"
                 imagen="/img/escuela/documentos.jpg" >
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Documento con el listado de empresas colaboradores para este curso 2021-2022</p>
          <p>Aprovechamos para agradecer su colaboración para que nuestroas alumnos obtengan una mejor formación práctica</p>
          <p><a href="https://drive.google.com/file/d/1pjxqO6s9EP_uT5Bqi9UO8KF80I_L-7fU/view?usp=sharing" target="_blank">Documento con la lista de empresas</a></p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Listado de empresas de Fp Dual" src="/img/noticias/2021/11/listado-fp-blur.jpg"
        ancho-max="500px" enlace="https://drive.google.com/file/d/1CRpIPltINKFwvkzjz97LDlZTIeRk58cA/view?usp=sharing" />
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
