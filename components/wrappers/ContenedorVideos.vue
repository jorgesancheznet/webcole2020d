<template>
  <div>
    <article class="contenedorVideos" >
      <iframe width="560" height="315" :src="video.ruta" :title="video.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen v-for="video in videos"></iframe>
    </article>
  </div>
</template>

<script>


import {noticias} from "assets/data/noticias";

export default {
  name: "ContenedorVideos",
  props: {
    videos: Array
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.contenedorVideos {
  text-align: center;
  width: 100%;
}

iframe {
  display: inline-block;
  width: 47%;
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
  iframe {
    width: 95%
  }
}

</style>
