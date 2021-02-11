<template>
  <main>
    <TituloGrande imagen="/img/fondos/noticias.jpg" titulo="NOTICIAS" subtitulo="Listado de noticias de Salesianos de Villamuriel"/>
    <SeccionOpaca>
      <ContenedorFichas :fichas="noticias" />
    </SeccionOpaca>
  </main>
</template>

<script>

import TituloGrande from "@/components/secciones/TituloGrande";
import SeccionOpaca from "@/components/secciones/SeccionOpaca";
import ContenedorFichas from "@/components/wrappers/ContenedorFichas";

import {noticias} from "@/assets/data/noticias"

export default {
  name: "noticias.vue",
  data(){
    return{
      noticias:noticias
    }
  },
  components:{
    TituloGrande,
    SeccionOpaca,
    ContenedorFichas
  }
}
</script>

<style lang="scss" scoped>

</style>
