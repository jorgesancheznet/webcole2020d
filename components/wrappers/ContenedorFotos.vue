<!-- Se requieren fotos de tamaño:
  mini: 400x300
  normal: 4000x3000
  estructura foto:{
    rutaMini:url,
    ruta:url,
    alt:txt
    id:id/txt
  }
-->
<template>
  <div>
    <article class="contenedorFotos">
      <figure v-for="foto in fotos">
        <img :src="foto.rutaMini" :alt="foto.alt" :data-id="foto.id"
        @click="mostrarPanel">
      </figure>
    </article>
    <div class="precarga">
      <!--Fotos ocultas para precarga -->
      <figure v-for="foto in fotos">
        <img :src="foto.ruta" :data-id="foto.id" :alt="foto.alt">
      </figure>
    </div>
    <ContenedorFotosGigante v-if="panelGiganteVisible" :fotoActual="fotoActual" :fotos="fotos"/>
  </div>
</template>

<script>

import {mapMutations,mapState} from "vuex";
import ContenedorFotosGigante from "./ContenedorFotosGigante";

export default {
  name: "ContenedorFotos",
  components: {ContenedorFotosGigante},
  props: {
    fotos: Array
  },
  data(){
    return{
      fotoActual:""
    }
  },
  methods:{
    ...mapMutations([
      "mostrarPanelGigante"
    ]),
    mostrarPanel(e){
      this.fotoActual=e.target.dataset.id;
      this.mostrarPanelGigante(true);
    }
  },
  computed: mapState([
      "panelGiganteVisible"
  ])
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

.precarga{
  display:none;
}

@media (max-width: $anchoMedio) {
  figure {
    width: 47%
  }
}

</style>
