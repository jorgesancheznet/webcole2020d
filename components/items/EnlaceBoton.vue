<template>
  <div class="enlaceBoton">
    <a :href="url" :target="(blank?'_blank':'_self')">{{texto}}</a>
  </div>
</template>

<script>
export default {
  name: "EnlaceBoton",
  props:{
    url:String,
    texto:String,
    blank:{
      type:String,
      default:false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
.enlaceBoton{
  text-align: center;
  width:100%;
  a{
    display:inline-block;
    text-align: center;
    padding:1em;
    border-radius:20px;
    margin:1em 0;
    text-decoration: none;
    @include letraNormal(normal, 2em, $colorFondoClaro);
    background-color: $colorGrisSalesiano;
    &:hover{
      background-color: lighten($colorGrisSalesiano,20%);
    }
  }
}
</style>
