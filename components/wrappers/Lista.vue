<template>
  <ul >
  <ItemLista v-for="(contenido,index) in contenidos" :key="'req'+index" :contenido="contenido" :data-aos-delay="aleatorio(500,1500)"
             :data-aos="'fade-up'"
             :data-aos-duration="aleatorio(500,1200)"
             :data-aos-easing="'ease-out-cubic'"  />
  </ul>
</template>

<script>
import ItemLista from "~/components/items/ItemLista";
export default {
  name: "Lista",
  components: {ItemLista},
  props:{
    contenidos:Array
  },
  methods:{
    aleatorio(min,max){
      return   Math.round(Math.random()*(max-min)+parseInt(min))
    }
  }
}
</script>

<style scoped>

</style>
