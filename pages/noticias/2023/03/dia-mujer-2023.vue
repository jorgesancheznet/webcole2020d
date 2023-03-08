<template>
  <PaginaNoticia titulo="Celebramos el día de la mujer"
                 imagen="/img/fondos/fondo.jpg" subtitulo="¡Hoy y todos los días!">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Hemos celebrado y reivindicado en el día de la mujer</p>
          <p>Durante toda la semana previa se han realizado actividades en el centro para concienciar sobre la brecha discriminativa que todavía hoy perdura y sigue lastrando el futuro de las mujeres.</p>
          <p>Los alumnos han podido debatir, escuchar y reaccionar en base a las charlas y actividades diversas realizadas</p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle src="/img/noticias/2023/03/8m2023-02.jpg" />
      </ColumnaContenido>
    </FilaContenido>
    <FilaContenido>
      <ColumnaContenido>
        <ImagenDetalle src="/img/noticias/2023/03/8m2023-01.jpg" />
      </ColumnaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>
            Entre las actividades realizadas destaca la charla <strong>"Lo imposible: una historia de supervivencia y esperanza"</strong> a cargo de <strong>María Belón</strong>, cuya historia de valentía y resiliencia tuvo un impacto universal gracias a la película <strong>Lo imposible</strong> de <strong>J. A. Bayona</strong>.</p>
          <p>El cierre de la jornada se realizó mediante un acto en el que se leyó un manifiesto, aplaudido por todos los alumnos y alumnas del centro.</p>
        </TextoDetalle>
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
