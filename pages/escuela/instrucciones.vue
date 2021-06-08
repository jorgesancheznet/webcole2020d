<template>
  <main>
    <TituloGrande titulo="MANUAL DE INSTRUCCIONES" subtitulo="Para el nuevo alumnado" colorFondo="#dc001b" imagen="none" />
    <SeccionOpaca colorFondo="#dc001b">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dignissimos magni natus placeat qui, quidem reprehenderit veniam. Autem, delectus dolores illum magni maxime minima neque nobis officia quasi repellat, repudiandae.</p>
    </SeccionOpaca>
  </main>
</template>

<script>
import TituloGrande from "../../components/secciones/TituloGrande";
import SeccionOpaca from "../../components/secciones/SeccionOpaca";

export default {
  name: "fp-dual.vue",
  components: { TituloGrande, SeccionOpaca}
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

</style>
