<template>
<div class="columnaContenido" :style="estiloFondo">
  <h3 v-if="titulo" v-html="titulo"></h3>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "ColumnaContenido",
  props:{
    titulo:String,
    colorFondo:{
      type:String,
      default:"transparent"
    }
  },
  computed:{
    estiloFondo(){
      return{
        "background-color":this.colorFondo
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
h3{
  @include letraNormal(normal,2em,black);
  margin:0 0 1em 0;
  text-align: center;
}
.columnaContenido{
  width:50%;
}

@media (max-width: $anchoMedio) {
  .columnaContenido{
    width:100%;
  }
}
</style>
