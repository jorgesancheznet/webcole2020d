<template>
  <PaginaNoticia titulo="Charla Renault"
                 imagen="/img/fondos/fondo.jpg" subtitulo="Innovación en la industria del automóvil">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>El pasado 17 de febrero tuvimos la visita de representantes de la empresa Renault, que nos explicaron cómo se está produciendo la transformación digital en la industria del automóvil.</p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle src="/img/noticias/2023/02/renault02.jpg" />
      </ColumnaContenido>
    </FilaContenido>
    <FilaContenido>
      <ColumnaContenido>
        <ImagenDetalle src="/img/noticias/2023/02/renault03.jpg" />
      </ColumnaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>
            Los alumnos participaron en el acto, preguntando e interesándose por las nuevas tecnologías que, desde esta gran empresa, son presente y futuro de sus nuevos vehículos</p>
          <p>Como expertos en captación de talento, trasmitieron las capacidades y valores más demandados actualmente.</p>
        </TextoDetalle>
      </ColumnaContenido>

    </FilaContenido>
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>La charla concluyó con la posibilidad de examinar vehículos <strong>Renault Arkana</strong> y <strong>Renault Australe</strong>, para deleite de nuestros alumnos y alumnas.</p>
          <p>Desde el centro agradecemos la buena disposición que siempre recibimos de Renault, así como el gran nivel de la charla. </p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle src="/img/noticias/2023/02/renault01.jpg" />
      </ColumnaContenido>
    </FilaContenido>
  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";
import ImagenDetalle from "@/components/items/ImagenDetalle";
import ContenedorFotos from "~/components/wrappers/ContenedorFotos";
import SeccionOpaca from "~/components/secciones/SeccionOpaca";
import TituloIndependiente from "~/components/wrappers/TituloIndependiente";

export default {
  components: {
    PaginaNoticia,
    FilaContenido,
    ColumnaContenido,
    TextoDetalle,
    ImagenDetalle,
    ContenedorFotos,
    SeccionOpaca,
    TituloIndependiente
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/constantes.scss";
@import "~assets/estilos/mixins.scss";


</style>
