<template>
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
export default {
  name: "ContenedorCarrusel",
  mounted() {
    var swiper = new this.$swiper('.swiper-container',
      {
        loop:true,
        pagination:{
          el:".swiper-pagination"
        },
        navigation:{
          nextEl:".swiper-button-next",
          prevEl:".swiper-button-next",
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
  }
}
</script>

<style scoped>

</style>
