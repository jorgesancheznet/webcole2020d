<template>
  <figure class="imagenDetalle" :style="maxMin">
    <a v-if="enlace" :href="enlace" :target="(blank)?'_blank':'_self'" >
      <img :src="src" :alt="alt" >
    </a>
    <img v-else :src="src" :alt="alt" >
    <figcaption v-if="pie">{{pie}}</figcaption>
  </figure>
</template>

<script>
export default {
  name: "ImagenDetalle",
  props:{
    src:String,
    alt:String,
    enlace:String,
    blank:{
      type:Boolean,
      default:true
    },
    anchoMax:{
      type:String,
      default:"100%"
    },
    anchoMin:{
      type:String,
      default:"0"
    },
    pie:String
  },
  computed:{
    maxMin(){
      return{
        "max-width":this.anchoMax,
        "min-width":this.anchoMin
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
  a:hover{
    outline: 10px solid $colorEnlaceHover;
  }
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
