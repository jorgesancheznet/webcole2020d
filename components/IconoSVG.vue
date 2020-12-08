<template>
  <svg class="icono" width={ancho} height={ancho} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
    <path d={d} stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  name: "IconoSVG",
  props:{
    d: {
      type:String,
      default:""
    },
    viewBox:{
      type:String,
      default:"0 0 24 24"
    },
    ancho:{
      type:Number,
      default:24
    }
  }
}
</script>

<style>
  .icono{
    position: relative;
    display:inline-block;
  }
</style>
