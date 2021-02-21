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

<style lang="scss" >
@import "~assets/estilos/mixins.scss";

.textoSticky{
  height:100vh;
  position:sticky;
  top:250px;
  width:50%;
  margin-left:45%;
  p{
    @include letraNormal(normal,1.75em,white);
    text-align: right;
    margin:0 4em 1em 10%;
    font-style: italic;
    background-color: transparentize($colorGrisSalesiano,.5);
  }
}
</style>
