<template>
  <div class="colFooter">
    <h3 v-if="titulo">{{titulo}}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  name: "ColumnaFooter",
  props:{
    titulo:String
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.colFooter {
  margin-left: 2em;
  display: inline-block;
  min-width: 400px;
  max-width: 700px;
  text-align: left;

  h3{
    margin-top: 1em;
    @include letraNormal(normal,2em,white);
    text-align: left;
    font-weight: normal;
  }
}
</style>
