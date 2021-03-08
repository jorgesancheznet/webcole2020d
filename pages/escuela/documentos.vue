<template>
  <main>
    <TituloGrande titulo="Documentos"
                  imagen="/img/escuela/documentos.jpg"/>
    <SeccionOpaca titulo="Documentos generales de centro" :sin-margen="true">
      <iframe src="https://drive.google.com/embeddedfolderview?id=1HRhpTwDZlR4dLPcoTCzkgnQSEt4vnPqs#grid"></iframe>
    </SeccionOpaca>
    <SeccionOpaca titulo="Documentos sobre campañas y pastoral" :sin-margen="true">
      <iframe src="https://drive.google.com/embeddedfolderview?id=1Cji111Vfn8gZzNf99wve7D56O8mHfvR4#grid"></iframe>
    </SeccionOpaca>
  </main>
</template>

<script>
export default {
  name: "erasmus"
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
