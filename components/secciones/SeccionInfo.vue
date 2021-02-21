<template>
  <section :id="informacion.idSeccion" class="seccionInfo">
    <h1>{{informacion.titulo}}</h1>
    <FilaInfo v-for="fila in informacion.filas" :infoFila="fila"
    :key="fila.id"/>
    <slot></slot>
  </section>
</template>

<script>
import FilaInfo from "@/components/wrappers/FilaInfo";
export default {
  name: "SeccionInfo",
  components: {FilaInfo},
  props: {
    informacion:Object
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.seccionInfo {
  position:relative;
  padding: 2em 0;
  background-color: $colorFondoInfo;
  h1 {
    @include letraNormal(normal,4em,$colorGrisSalesiano);
    text-align: center;
  }
  p{
    @include letraNormal(normal,2em,$colorGrisSalesiano);
  }
}

</style>
