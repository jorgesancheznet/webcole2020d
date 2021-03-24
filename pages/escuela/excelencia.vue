<template>
  <PaginaNoticia titulo="Somos centro de excelencia de alto nivel" subtitulo="El reconocimiento más alto como centro de excelencia en FP" imagen="/img/textura1.jpg">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>La Junta de Castilla y León nos ha reconocido como <strong>centro de excelencia</strong> de <strong>alto
            nivel </strong>en su orden de 13 de Octubre de 2020 </p>
          <p>Este reconocimiento supone un espaldarazo a nuerstra labor por intentar hacer de nuestro centro un centro especial y nos motiva a continuar en los años venideros por este camino. </p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle src="/img/noticias/2020/11/FP_excelencia.jpeg" alt="Reconocimiento de excelencia" ancho-max="70%"/>
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
  components: {PaginaNoticia,FilaContenido,ColumnaContenido,TextoDetalle}
}
</script>

<style scoped>

</style>
