<template>
  <main>
    <TituloMedio titulo="SECRETARÍA DEL CENTRO" imagen="/img/escuela/documentos.jpg" />
    <SeccionOpaca titulo="DOCUMENTOS PARA MATRICULACIÓN" :sin-margen="true">
      <CarpetaDrive src="https://drive.google.com/embeddedfolderview?id=1Yvhpdl00uyloG3UUx1wtXboNsK-cPYMa#grid" />
    </SeccionOpaca>
  </main>

</template>

<script>


import TituloMedio from "../../components/secciones/TituloMedio";
import SeccionOpaca from "../../components/secciones/SeccionOpaca";
import CarpetaDrive from "@/components/items/CarpetaDrive";
export default {
  components: {SeccionOpaca, TituloMedio,CarpetaDrive},
}
</script>

<style scoped>

</style>
