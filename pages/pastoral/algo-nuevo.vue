<template>
  <PaginaNoticia titulo="Algo nuevo está brotando" subtitulo="Campaña Pastoral 2020/21" imagen="/img/textura1.jpg">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle titulo="El por qué de la campaña" :fuente-min="true">
          <p>La novedad de lo que estamos viviendo y el cómo situarlo en nuestra vida está exigiendo un replanteamiento
            personal y social de todo lo que somos y hacemos.</p>
          <p>Nuestra Campaña no quiere evadirse de esta situación, sino que busca aprovecharla como una oportunidad para
            educar nuestra mirada y nuestro corazón ante el nuevo tiempo que está naciendo.</p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Algo nuevo está brotando" src="/img/pastoral/algo-nuevo.png" />
      </ColumnaContenido>

    </FilaContenido>
    <FilaContenido>
      <TextoDetalle titulo="Lemas de Otros años">
        <p>Lema de este curso 2021/22
          <NuxtLink to="/pastoral/algo-nuevo">Curso 2020-20: Algo nuevo está brotando</NuxtLink></p>
      </TextoDetalle>
    </FilaContenido>

  </PaginaNoticia>
</template>

<script>
import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";

export default {
  components: {PaginaNoticia,FilaContenido,TextoDetalle,ColumnaContenido},
}
</script>

<style scoped>

</style>
