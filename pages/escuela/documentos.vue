<template>
  <main>
    <TituloGrande titulo="Documentos"
                  imagen="/img/escuela/documentos.jpg"/>
    <SeccionOpaca titulo="Documentos generales de centro" :sin-margen="true">
      <CarpetaDrive src="https://drive.google.com/embeddedfolderview?id=16nShiA2FMccXG8qpbG6kziO7aDZLcMSx#grid" />
    </SeccionOpaca>
    <SeccionOpaca titulo="Documentos sobre campañas y pastoral" :sin-margen="true">
      <CarpetaDrive src="https://drive.google.com/embeddedfolderview?id=1Cji111Vfn8gZzNf99wve7D56O8mHfvR4#grid" />
    </SeccionOpaca>
    <SeccionOpaca titulo="Documentos sobre FP Dual" :sin-margen="true">
      <CarpetaDrive src="https://drive.google.com/embeddedfolderview?id=1hViNbdgpD2TCv919cxIh5ZyTiggiwSh9#grid" />
    </SeccionOpaca>
  </main>
</template>

<script>
import TituloGrande from "@/components/secciones/TituloGrande";
import SeccionOpaca from "@/components/secciones/SeccionOpaca";
import CarpetaDrive from "@/components/items/CarpetaDrive";
export default {
  name: "documentos",
  computed:{SeccionOpaca,TituloGrande,CarpetaDrive}
}
</script>

<style scoped>

</style>
