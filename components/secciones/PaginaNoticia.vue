<template>
  <main>
    <TituloMedio :titulo="titulo" :subtitulo="subtitulo" imagen="/img/textura1.jpg"/>
    <SeccionOpaca>
      <slot />
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
  props:{
    titulo:String,
    subtitulo:String,
    imagen:String
  },
  components: {SeccionOpaca, TituloMedio}
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

/deep/ p{
  @include  letraNormal(normal,1.8em,black);
}
/deep/ iframe{
  width:100%;
  height:400px;
}

@media  (max-width:800px) {
  /deep/ p{
    @include  letraNormal(normal,1.2em,black);
  }
}
</style>
