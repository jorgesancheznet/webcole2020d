<template>
  <PaginaNoticia titulo="Inicio del curso 2022/23"
                 imagen="/img/fondos/fondo.jpg" subtitulo="¡Ya han empezado las clases los alumnos de ESO y FPB!">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>¡¡¡¡ Primer día de clase de nuestra sección de la
            <NuxtLink to="/estudios/eso">ESO</NuxtLink>
            y
            <NuxtLink to="/estudios/mantenimiento">Formación Profesional de Grado Básico</NuxtLink>
            !!
          </p>
          <p>Atrás quedaron los días de vacaciones y volvemos al aula con una mochila cargada de expectativas,
            inseguridades, alegría, miedos.... sí, pero también con espacio suficiente para ir llenándola de cosas
            positivas durante el nuevo curso escolar.
          <p>
          <p class="centrado">BIENVENIDOS/AS A VUESTRO CENTRO Y ÁNIMO EN VUESTRO NUEVO
            <NuxtLink to="/pastoral/lema-curso">CAMINO</NuxtLink>
          </p>
        </TextoDetalle>
      </ColumnaContenido>
    </FilaContenido>
    <FilaContenido>
      <ColumnaContenido>
        <h3 style="margin-top:2em;"></h3>
      </ColumnaContenido>
    </FilaContenido>
    <TituloIndependiente titulo="FOTOS" id="t1"/>
    <SeccionOpaca colorFondo="#999999">
      <ContenedorFotos :fotos="fotos"/>
    </SeccionOpaca>
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
  },
  data() {
    return {
      fotos: [
        {
          rutaMini: "/img/noticias/2022/09/inicio-foto1-mini.jpg",
          ruta: "/img/noticias/2022/09/inicio-foto1.jpg",
          alt: "Inicio curso 2022/23",
          id: "foto1"
        },
        {
          rutaMini: "/img/noticias/2022/09/inicio-foto2-mini.jpg",
          ruta: "/img/noticias/2022/09/inicio-foto2.jpg",
          alt: "Inicio curso 2022/23",
          id: "foto2"
        },
        {
          rutaMini: "/img/noticias/2022/09/inicio-foto3-mini.jpg",
          ruta: "/img/noticias/2022/09/inicio-foto3.jpg",
          alt: "Inicio curso 2022/23",
          id: "foto3"
        },
        {
          rutaMini: "/img/noticias/2022/09/inicio-foto4-mini.jpg",
          ruta: "/img/noticias/2022/09/inicio-foto4.jpg",
          alt: "Inicio curso 2022/23",
          id: "foto4"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/constantes.scss";
@import "~assets/estilos/mixins.scss";


</style>
