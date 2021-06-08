<template>
  <div>
    <article class="contenedorFotosVerticales">
      <figure v-for="foto in fotos">
        <img :src="foto.ruta" :alt="foto.alt" :data-id="foto.id">
      </figure>
    </article>
  </div>
</template>

<script>

import {mapMutations,mapState} from "vuex";
import ContenedorFotosGigante from "./ContenedorFotosGigante";

export default {
  name: "ContenedorFotos",
  props: {
    fotos: Array
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.contenedorFotosVerticales {
  text-align: center;
  width: 100%;
  max-width:$anchoMaximoMain;
  margin: auto;
  background-color: gray;
  height:400px;
}

</style>
