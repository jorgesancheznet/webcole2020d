<template>
  <figure class="imagenDetalle">
    <img :src="src" :alt="alt">
  </figure>
</template>

<script>
export default {
  name: "ImagenDetalle",
  props:{
    src:String,
    alt:String
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.imagenDetalle{
  width:100%;
  margin:0;
  padding:1em 2em;
  img{
    width:100%;
  }
}

</style>
