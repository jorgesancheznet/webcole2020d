<template>
  <aside id="social">
    <a href="https://www.facebook.com/Salesianos-Villamuriel-Palencia-192952044069591/"><img src="/img/iconos/facebook.png" alt="facebook" @mouseover="cambia2" @mouseout="cambia"></a>
    <a href="https://twitter.com/centrodonbosco"><img src="/img/iconos/twitter.png" alt="twitter" @mouseover="cambia2" @mouseout="cambia"></a>
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
      e.target.src=`/img/iconos/${e.target.alt}.png`;
    },
    cambia2(e){
      e.target.src=`/img/iconos/${e.target.alt}2.png`;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

#social{
  position:fixed;
  bottom:0;
  right:0;
  transition:1s top;
  background-color: rgba(0,0,0,.5);
  z-index:$zSociales;
  a{
    outline:none;
    border:none;
  }
}


</style>
