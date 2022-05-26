<template>
  <main>
    <TituloMedio :titulo="titulo" :subtitulo="subtitulo" imagen="/img/textura1.jpg"/>
    <SeccionOpaca>
      <slot/>
    </SeccionOpaca>
    <SeccionOpaca>
      <p>&nbsp;</p>
    </SeccionOpaca>
  </main>
</template>

<script>
import TituloMedio from "@/components/secciones/TituloMedio";
import SeccionOpaca from "@/components/secciones/SeccionOpaca";

export default {
  name: "PaginaNoticia",
  props: {
    titulo: String,
    subtitulo: String,
    imagen: String
  },
  components: {SeccionOpaca, TituloMedio}
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

/deep/ h3 {
  @include letraNormal(bold, 2em, $colorFondoPie);
  text-align: center;
  margin: 0;
}


/deep/ p, /deep/ ul {
  @include letraNormal(normal, $fuenteMax, black);
}

/deep/ blockquote {
  @include letraNormal(normal, $fuenteMax - 0.2, black);
  font-style: italic;
}

/deep/ .fuenteMed {
  p, ul, blockquote {
    @include letraNormal(normal, $fuenteMed, black);
  }
}

/deep/ .fuenteMin {
  p, ul, blockquote {
    @include letraNormal(normal, $fuenteMin, black);
  }
}

/deep/ ul {
  .cita {
    @include letraNormal(normal, $fuenteMax - 0.2, $colorFondoPie);

    li {
      font-style: italic;
      margin-left: 1.5em;
    }
  }
}


/deep/ iframe {
  width: 100%;
  height: 400px;
}


/deep/ strong {
  @include negrita;
}

@media (max-width: 800px) {
  /deep/ p, /deep/ ul {
    @include letraNormal(normal, $fuenteMin, black);

    &.fuenteMed {
      @include letraNormal(normal, $fuenteMin, black);
    }
  }
  /deep/ blockquote {
    @include letraNormal(normal, $fuenteMin - 0.1, black);
  }
  /deep/ ul.cita {
    @include letraNormal(normal, $fuenteMin - 0.1, $colorFondoPie);

    li {
      font-style: italic;
      margin-left: 1.5em;
    }
  }
}
</style>
