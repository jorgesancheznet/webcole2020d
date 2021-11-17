<template>
  <aside id="social">
    <a href="https://www.facebook.com/Salesianos-Villamuriel-Palencia-192952044069591/"><img src="/img/iconos/facebook.svg" alt="facebook" @mouseover="cambia2" @mouseout="cambia"></a>
    <a href="https://twitter.com/centrodonbosco"><img src="/img/iconos/twitter.svg" alt="twitter" @mouseover="cambia2" @mouseout="cambia"></a>
    <a href="https://www.flickr.com/photos/58942531@N04/"><img src="/img/iconos/flickr.svg" alt="flickr" @mouseover="cambia2" @mouseout="cambia"></a>
    <a href="https://www.instagram.com/salesianosvillamuriel/"><img src="/img/iconos/instagram.svg" alt="instagram" @mouseover="cambia2" @mouseout="cambia"></a>
    <a href="https://www.youtube.com/user/donboscovillamuriel"><img src="/img/iconos/youtube.svg" alt="youtube" @mouseover="cambia2" @mouseout="cambia"></a>
  </aside>
</template>

<script>

export default {
  name: "BarraSocial",
  mounted() {
    document.body.insertBefore(this.$el, document.body.lastChild);


  },
  methods:{
    cambia(e){
      e.target.src=`/img/iconos/${e.target.alt}.svg`;
    },
    cambia2(e){
      e.target.src=`/img/iconos/${e.target.alt}2.svg`;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

#social{
  position:fixed;
  bottom:0;
  right:20px;
  transition:1s top;
  z-index:$zSociales;
  a{
    outline:none;
    border:none;
    img{
      width:40px;
      transition:width .5s;
      &.doble {
        width: 55px;
      }
      &:hover{
        width:70px;
        transition:width .5s
      }
    }
  }
}


</style>
