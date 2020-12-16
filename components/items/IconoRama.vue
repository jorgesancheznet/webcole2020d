<template>


<div class="iconoRama" data-aos="zoom-in-down" :data-aos-duration="parseInt(Math.random()*1000+300)" :data-aos-delay="parseInt(Math.random()*300)" data-aos-easing="easing-out-cubic">
  <IconoSVG :ancho="80" :d="icono.d" :viewBox="icono.viewBox" fill="#dc9869" />
  <p>{{nombre}}</p>
</div>
</template>

<script>
import IconoSVG from "@/components/items/IconoSVG";
export default {
  name: "IconoRama",
  components: {IconoSVG},
  props:{
    icono:Object,
    nombre:String
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.iconoRama{
  width: 16%;
  min-width:175px;
  background-color: rgba($colorFondoPie,.65);
  padding:.8em;
  border-radius: .5em;
  fill:$colorNaranja;
  margin:0 0 1em 0;
  p{
    margin:0;
    color:white;
    @include letraNormal(normal,1.3em,white);
  }
}
</style>
