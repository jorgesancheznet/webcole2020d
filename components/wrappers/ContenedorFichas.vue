<template>
<article class="contenedorFichas">
  <Ficha v-for="ficha in fichas" :contenido="ficha" :mini="mini" :key="ficha.id"/>
</article>
</template>

<script>
import Ficha from "~/components/items/Ficha";
export default {
  name: "ContenedorFichas",
  props:{
    fichas:Array,
    mini:{
      type:Boolean,
      default:false
    }
  },
  components: {Ficha}
}
</script>

<style lang="scss" scoped>
  .contenedorFichas{
    text-align: center;
  }
</style>
