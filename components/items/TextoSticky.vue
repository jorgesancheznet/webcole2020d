<template>
  <div class="textoSticky">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "TextoSticky"
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.textoSticky{
  height:100vh;
  position:sticky;
  top:200px;
  /deep/ p{
    @include letraNormal(light,1.75em,white);
    text-align: right;
    margin:0 4em 1em 50%;
    font-style: italic;
  }
}
</style>
