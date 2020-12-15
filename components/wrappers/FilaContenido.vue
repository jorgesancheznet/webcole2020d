<template>
  <article class="filaContenido">
    <h3 v-if="titulo"></h3>
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

  h3 {
    @include letraNormal(bold, 2em, $colorFondoPie);
    text-align: center;
    margin: 0;
  }
}

@media (max-width: $anchoMedio) {
  .filaContenido {
    display: block;
  }
}
</style>
