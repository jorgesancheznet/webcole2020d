<template>
<li v-html="contenido.texto">
  <span class="subtexto" v-if="contenido.subtexto">
    {{contenido.subtexto}}
  </span>
</li>
</template>

<script>
export default {
  name: "ItemLista",
  props:{
    contenido:Object
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

li {
  list-style: none;
  padding-left: 2em;
  @include letraNormal(normal,1.2em,black);
  text-indent: -1.55em;
  margin-bottom:.5em;


  &:before {
    content: "";
    display: inline-block;
    height: 1em;
    width: 1em;
    margin-right: .5em;
    background-repeat: no-repeat;
    background-image: url('/img/svg/circle-tenue.svg');
    background-size: contain;
  }
}

.subtexto {
  color:$colorTenue;
}

</style>
