<template>
  <PaginaNoticia titulo="Se buscan héroes" subtitulo="19 de enero de 2021" imagen="/img/textura1.jpg">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Con la fiesta de DonBosco en el horizonte, llega la Campaña Vocacional de #Salesianos Santiago el Mayor: “Se Buscan #Héroes”</p>
          <p>Este será el lema de la Campaña Vocacional para este mes de #DonBosco.</p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <iframe src="https://www.youtube.com/embed/WuGBPMJCqKY" frameborder="0" width="460" height="215"></iframe>
        </TextoDetalle>
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
