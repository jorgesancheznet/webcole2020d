<template>
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <Ficha v-for="ficha in datos" :contenido="ficha" :key="ficha.id" :retardoMin="200" :retardoMax="600" :duracionMin="400" :duracionMax="1200"/>
    </div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <div class="swiper-pagination"></div>

  </div>
</template>

<script>
import Ficha from "@/components/items/Ficha";
export default {
  name: "ContenedorCarrusel",
  components: {Ficha},
  props:{
    datos:Array
  },
  mounted() {
    var swiper = new this.$swiper('.swiper-container',
      {
        navigation:{
          nextEl:".swiper-button-next",
          prevEl:".swiper-button-prev",
        },
        pagination:{
          el:".swiper-pagination",
          clickable:true
        },
        slidesPerView:"auto"
      })
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
@import "../../node_modules/swiper/swiper";
.swiper-button-next,.swiper-button-prev{
  color:$colorNaranja;
  text-shadow: black 0 0 10px;
  &:hover{
    color:lighten($colorNaranja, 20%);
  }
  &:after{
    font-size:5em;
  }
}

</style>
