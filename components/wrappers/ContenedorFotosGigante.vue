<!--
El contenedor usa una mutación,
además requiere de un array de fotos donde el id de cada foto se numera: 1,2,3....
-->
<template>
  <section class="contenedorFotosGigante">
    <div class="botonCerrar" @click="cerrarPanel">
      <IconoSVG :ancho="50" :d="iconoCierre.d" :viewBox="iconoCierre.viewBox" :fill="'#51626F'" :enlace="true"/>
    </div>

    <div class="irIzda btnIr" @click="anterior">
      <IconoSVG :ancho="100" :d="chevronLeft.d" :viewBox="chevronLeft.viewBox" :fill="'#dc9869'" :enlace="true" />
    </div>

    <div class="irDcha btnIr" @click="siguiente">
      <IconoSVG :ancho="100" :d="chevronRight.d" :viewBox="chevronRight.viewBox" :fill="'#dc9869'"  :enlace="true"/>
    </div>
    <transition name="fade">
      <div class="foto" v-for="foto in fotos" v-if="foto.id===fotoId">
        <img :src="foto.ruta" alt="foto.alt" >
      </div>
    </transition>
  </section>
</template>

<script>
import {iconoCierre, chevronLeft, chevronRight} from "~/assets/svg/iconos";
import IconoSVG from "../items/IconoSVG";
import {mapMutations} from "vuex";

export default {
  name: "ContenedorFotosGigante",
  components: {IconoSVG},
  data() {
    return {
      panelGigante: false,
      iconoCierre: iconoCierre,
      chevronLeft: chevronLeft,
      chevronRight: chevronRight,
      fotoId:""
    }
  },
  props: {
    fotos: Array,
    fotoActual: String
  },
  methods: {
    cerrarPanel() {
      this.mostrarPanelGigante(false)
    },
    anterior() {
      let nFoto = parseInt(this.fotoId.substring(4));
      if (--nFoto === 0) nFoto = this.fotos.length;
      this.fotoId = "foto" + nFoto;
    },
    siguiente() {
      let nFoto = parseInt(this.fotoId.substring(4));
      if (++nFoto === this.fotos.length + 1) nFoto = 1;
      this.fotoId = "foto" + nFoto;
    },
    ...mapMutations([
      "mostrarPanelGigante"
    ]),
    mostrarPanel() {
      this.mostrarPanelGigante(true)
    }
  },
  mounted() {
    document.body.insertBefore(this.$el, document.body.firstChild);
    this.fotoId=this.fotoActual;
  }

}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.contenedorFotosGigante {
  @include panel(0, fixed);
  z-index: $zPantallaCompleta;
  background-color: rgba(255, 255, 255, .9);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.foto {

  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {

    max-width: 100%;
    max-height: 100%;
  }

}

.botonCerrar {
  position: fixed;
  right: 2em;
  top: 2em;
  fill: $colorGrisSalesiano;

  &:hover {
    fill: black;
  }
}

.btnIr {
  position: fixed;
  top: calc(50% - 50px);
  color:$colorNaranja;
  &:hover{
    color:lighten($colorNaranja, 20%);
  }

}

.irIzda {
  left: 2em;
}

.irDcha {
  right: 2em;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
  opacity:1;
}
.fade-enter, .fade-leave-to, .fade-leave-active{
  opacity: 0;
  transition: opacity 1s;
}
</style>
