<template>
  <main>
    <SplashPanel idSeccion="Portada" imagen="/img/neonbrand-426918-unsplash.jpg" titulo="Excelencia adaptada<br>a cada estudiante" subtitulo="En búsqueda permanente de nuevos caminos que permitan el éxito educativo">

    </SplashPanel>
  </main>
</template>

<script>
import Cabecera from "~/components/cabecera/Cabecera";
import SplashPanel from "@/components/secciones/SplashPanel";

import {mapMutations} from "vuex";

export default {
  components: {SplashPanel, Cabecera},
  computed:{
    fondo(){
      return this.$store.state.fondo
    }
  },
  methods:{
    ...mapMutations([
      "cambiarFondo"
    ])
  },
  mounted(){
    this.cambiarFondo("/img/fondo.jpg");
  }
}
</script>

<style lang="scss" scoped>
</style>
