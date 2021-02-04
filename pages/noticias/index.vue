<template>
  <main>
    <TituloGrande imagen="/img/fondos/noticias.jpg" titulo="NOTICIAS" subtitulo="Listado de noticias de Salesianos de Villamuriel"/>
    <SeccionOpaca>
      <p><a href="/noticias/123">123</a> {{new Date()}}</p>
    </SeccionOpaca>
  </main> 
</template>

<script>

import TituloGrande from "@/components/secciones/TituloGrande";
import SeccionOpaca from "@/components/secciones/SeccionOpaca";

export default {
  name: "noticias.vue",
  components:{
    TituloGrande,
    SeccionOpaca
  }
}
</script>

<style scoped>

</style>
