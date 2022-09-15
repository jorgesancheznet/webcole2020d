<template>
  <article class="filaContenido">
    <h3 v-if="titulo">{{titulo}}</h3>
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: "FilaContenido",
  props: {
    titulo: String
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.filaContenido {
  display: flex;
  margin:auto;
  justify-content: center;

  h3 {
    @include letraNormal(bold, 2em, $colorFondoPie);
    text-align: center;
    margin: 0;
    &.resalte{
      color:$colorRojoSalesiano;
    };
    &.grande{
      font-size:3em;
    }
  }
}

@media (max-width: $anchoMedio) {
  .filaContenido {
    display: block;
  }
}
</style>
