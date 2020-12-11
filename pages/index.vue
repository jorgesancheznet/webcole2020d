<template>
  <main>
    <TelonFondo :imagen="'/img/fondo.jpg'" :alt="'fondo'" />
    <SplashPanel idSeccion="Portada" imagen="/img/neonbrand-426918-unsplash.jpg" titulo="Excelencia adaptada<br>a cada estudiante" subtitulo="En búsqueda permanente de nuevos caminos que permitan el éxito educativo">

    </SplashPanel>
  </main>
</template>

<script>
import Cabecera from "~/components/cabecera/Cabecera";
import TelonFondo from "@/components/secciones/TelonFondo";
import SplashPanel from "@/components/secciones/SplashPanel";

export default {
  components: {SplashPanel, TelonFondo, Cabecera}
}
</script>

<style lang="scss" scoped>
</style>
