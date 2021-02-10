<template>
  <section :id="idSeccion" class="seccionOpaca" :style="{backgroundColor:colorFondo}">
    <br>
    <h1 v-if="titulo" :style="{color:colorTitulo}">
      {{titulo}}
    </h1>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "SeccionOpaca",
  props:{
    titulo:String,
    idSeccion:String,
    colorFondo:{
      type:String,
      default:"#d9d9d9"
    },
    colorTitulo:{
      type:String,
      default:"#51626F"
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.seccionOpaca{
  h1{
    margin:2em 0 1em;
    @include letraNormal(normal,4em,$colorFicha);
    text-align: center;
  }
  p {
    @include letraNormal(normal, 1.8em, $colorFicha);
    color: blue;
  }
}
</style>
