<template>
<div id="fondo">
  <img :src="imagen" :alt="alt">
</div>
</template>

<script>
export default {
  name: "TelonFondo",
  props:{
    imagen:String,
    alt:String
  },
  mounted(){
    document.body.insertBefore(this.$el, document.body.firstChild)
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
#fondo{
  @include panel(0,fixed);
  z-index:-1;
  background:$colorGrisSalesiano no-repeat center center;
  background-size: cover;
  img{
    width:100vw;
    height:100vh;
    object-fit: cover;
  }
}
</style>
