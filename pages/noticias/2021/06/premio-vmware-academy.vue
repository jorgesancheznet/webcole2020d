<template>
  <PaginaNoticia titulo="Premio al mejor centro VMWare IT Academy de 2020" subtitulo="PUE Academy's Awards"
                 imagen="/img/textura1.jpg">
    <FilaContenido>
      <TextoDetalle>
        <p><a href="https://www.pue.es/">PUE</a> nos ha otorgado el premio al mejor centro <strong>VMWare IT Academy
          2020</strong> en los <strong>PUE Academy Awards</strong> de este año.</p>
        <p>Los PUE Academy Awards reconocen la labor de instituciones educativas en su apuesta y esfuerzo por implantar
          curricularmente programas educativos de formación y certificación oficial TIC con el objetivo de incrementar la
          cualificación de sus alumnos y potenciar su empleabilidad.</p>
        <p>Nuestro centro lleva años implantando en sus programas formativos la tecnología de la empresa líder del sector
          de la virtualización. Nuestra apuesta como centro VMWare IT Academy ha permitido dar valor añadido a nuestro
          currículo formativo, especialmente en los ciclos de
          <NuxtLink to="/estudios/telecomunicaciones">Telecomunicaciones</NuxtLink>
          y
          <NuxtLink to="/estudios/asir">Administración de Sistemas Informáticos en Red</NuxtLink>
          .
        </p>
        <p>El trabajo como centro innovador e integrador de las tecnologías de las
          principales empresas tecnológicas en nuestros estudios se ve recompensado con este premio y supone un aliciente para seguir innovando y mejorando nuestra calidad educativa.</p>
      </TextoDetalle>
    </FilaContenido>
    <FilaContenido>
        <div style="width: 80%;margin:auto;z-index:2001">
          <div style="position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fbPg_JLmXWM"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
        </div>
    </FilaContenido>
    <FilaContenido>
    <TextoDetalle>
      <p>Damos las gracias a PUE por este reconocimiento que servirá como impulsor de nuevos retos en el futuro. ¡Muchas
        gracias!</p>
      </TextoDetalle>
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
