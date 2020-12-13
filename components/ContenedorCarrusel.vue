<template>
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <Ficha v-for="ficha in datos" :contenido="ficha" :key="ficha.id" />
    </div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

  </div>
</template>

<script>
import Ficha from "~/components/Ficha";
export default {
  name: "ContenedorCarrusel",
  components: {Ficha},
  props:{
    datos:Array
  },
  mounted() {
    console.log(this.datos)
    var swiper = new this.$swiper('.swiper-container',
      {
        loop:true,
        navigation:{
          nextEl:".swiper-button-next",
          prevEl:".swiper-button-prev",
        },
      })
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
@import "~swiper/swiper.scss";
</style>
