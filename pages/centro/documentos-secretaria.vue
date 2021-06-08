<template>
  <main>
    <TituloMedio titulo="SECRETARÍA DEL CENTRO" imagen="/img/escuela/documentos.jpg" />
    <SeccionOpaca titulo="DOCUMENTOS PARA MATRICULACIÓN" :sin-margen="true">
      <iframe src="https://drive.google.com/embeddedfolderview?id=1Yvhpdl00uyloG3UUx1wtXboNsK-cPYMa#grid"></iframe>
    </SeccionOpaca>
  </main>
</template>

<script>


import TituloMedio from "../../components/secciones/TituloMedio";
import SeccionOpaca from "../../components/secciones/SeccionOpaca";
export default {
  components: {SeccionOpaca, TituloMedio},
}
</script>

<style scoped>
iframe{
  width:100%;
  height:400px;
  overflow: auto;
  border:none;
  text-align: center;
}
</style>
