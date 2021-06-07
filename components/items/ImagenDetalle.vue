<template>
  <figure class="imagenDetalle" :style="maxWidth">
    <img :src="src" :alt="alt">
    <figcaption v-if="pie">{{pie}}</figcaption>
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
    },
    pie:String
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
  figcaption{
    color:$colorGrisSalesiano;
    text-align: center;
    font-size:1.1em;
  }
}


</style>
