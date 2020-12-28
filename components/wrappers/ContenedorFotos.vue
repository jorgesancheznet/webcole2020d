<template>
  <article class="contenedorFotos">
    <figure v-for="foto in fotos">
      <img :src="foto.rutaMini" :alt="foto.alt" :data-id="foto.id">
    </figure>
  </article>
</template>

<script>
export default {
  name: "ContenedorFotos",
  props:{
    fotos:Array
  }

}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
.contenedorFotos {
  text-align: center;
  width: 100%;
}

figure {
  display: inline-block;
  width: 23%;
  margin: .5em;
  cursor: pointer;

  &:hover {
    outline: solid 4px white;
  }

  img {
    width: 100%;
  }
}


@media (max-width: $anchoMedio) {
  figure {
    width: 47%
  }
}

</style>
