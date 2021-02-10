<template>
  <main>
    <TituloGrande :titulo="titulo" :subtitulo="subtitulo" imagen="/img/textura1.jpg"/>
    <SeccionOpaca>
      <slot />
    </SeccionOpaca>
    <SeccionOpaca>
      <p>&nbsp;</p>
    </SeccionOpaca>
  </main>
</template>

<script>
import TituloGrande from "@/components/secciones/TituloGrande";
import SeccionOpaca from "@/components/secciones/SeccionOpaca";

export default {
  name: "PaginaNoticia",
  props:{
    titulo:String,
    subtitulo:String,
    imagen:String
  },
  components: {SeccionOpaca, TituloGrande}
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

/deep/ p{
  @include  letraNormal(normal,1.8em,black);
}
</style>
