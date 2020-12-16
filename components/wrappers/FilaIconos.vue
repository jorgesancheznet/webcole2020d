<template>
<article class="filaIconos">
  <slot></slot>
</article>
</template>

<script>
export default {
  name: "FilaIconos"
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.filaIconos {
  display: flex;
  text-align: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1em;
  color: white;
  max-width: $anchoMaximoMain;
  margin: auto;
}

</style>
