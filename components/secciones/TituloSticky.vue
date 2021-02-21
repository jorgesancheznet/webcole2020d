<template>
  <div class="tituloSticky">
    <h2 v-if="titulo">{{titulo}}</h2>
  </div>
</template>

<script>
export default {
  name: "TituloSticky",
  props:{
    titulo:String
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.tituloSticky{
  height:100vh;
  position:sticky;
  top:0;
  background-color: rgba(0,0,0,.5);
  padding-top:60px;
  h2{
    position: sticky;
    @include letraNormal(light,5em,white);
    text-align: center;
  }
}

@media  (max-width:800px) {
  .tituloSticky {
    h2 {
      font-size: 3em;
    }
  }
}
</style>
