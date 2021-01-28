<template>
  <figure class="imagenDetalle" :style="maxWidth">
    <img :src="src" :alt="alt">
  </figure>
</template>

<script>
export default {
  name: "ImagenDetalle",
  props:{
    src:String,
    alt:String,
    anchoMax:{
      type:String,
      default:"100%"
    }
  },
  computed:{
    maxWidth(){
      return{
        "max-width":this.anchoMax
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.imagenDetalle{
  width:100%;
  margin:0 auto;
  padding:1em 2em;
  img{
    width:100%;
  }
}


</style>
