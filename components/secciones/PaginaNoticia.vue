<template>
  <main>
    <TituloGrande :titulo="titulo" :subtitulo="subtitulo" imagen="imagen"/>
    <SeccionOpaca>
      <slot />
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

p{
  @include  letraNormal(normal,2em,$colorFicha);
}
</style>
