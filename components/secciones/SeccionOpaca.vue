<template>
  <section :id="idSeccion" class="seccionOpaca" :style="{backgroundColor:colorFondo}">
    <br>
    <h1 v-if="titulo" :style="{color:colorTitulo}" :class="{sinMargen:sinMargen}">
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
    },
    sinMargen:{
      type:Boolean,
      default:false
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
    &.sinMargen{
      margin-top:0.1em;
    }
  }
  h2{
    @include letraNormal(normal,2.5em,$colorGrisSalesiano);
    text-align: center;
  }
}

@media  (max-width:$anchoMovil) {
  .seccionOpaca {
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.4em;
    }
  }
}
</style>
