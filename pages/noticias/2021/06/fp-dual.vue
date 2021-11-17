<template>
  <PaginaNoticia titulo="FP Dual en los ciclos de Telecomunicaciones e Informática" subtitulo="Próximo plazo de matrícula"
                 imagen="/img/textura1.jpg">
    <FilaContenido>
      <TextoDetalle>
        <p>Os dejamos un vídeo sobre la <NuxtLink to="/escuela/fp-dual">FP Dual</NuxtLink> protagonizado por algunos de nuestros alumnos del ciclo de
          <NuxtLink to="/estudios/telecomunicaciones">Telecomunicaciones</NuxtLink>, que nos explican lo que les ha parecido la experiencia.
        </p>
        <p>Nuestra apuesta por la FP Dual es decidida y abarca ya a todos nuestros ciclos de Formación Profesional.</p>
        <p>El plazo de admisión para cursar FP con nosotros se abre en la última semana de junio</p>
      </TextoDetalle>
    </FilaContenido>
    <FilaContenido>
        <div style="width: 80%;max-width:560px;min-height:700px;margin:auto;z-index:2001">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tXZcjOUSBiY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
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
