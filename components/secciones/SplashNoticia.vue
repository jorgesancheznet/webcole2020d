<template>
  <section class="splashNoticia" :class="{sinOpacidad:esSafari}" @click="cerrarPanel">
    <aside @click="cerrarPanel" class="botonCerrar">
      <IconoSVG :d="iconoCierre.d" :viewBox="iconoCierre.viewBox" :ancho="50" :enlace="true" :fill="'#AAAAAA'" />
    </aside>
    <article>
      <slot/>
    </article>
  </section>
</template>

<script>
import {iconoCierre} from "~/assets/svg/iconos";
import IconoSVG from "../items/IconoSVG";

export default {
  name: "SplashNoticia",
  components: {IconoSVG},
  data() {
    return {
      iconoCierre: iconoCierre,
      esSafari:{
        type:Boolean,
        default:false
      }
    }
  },
  mounted() {
    let chromeAgent = navigator.userAgent.indexOf("Chrome") > -1;
    this.esSafari = navigator.userAgent.indexOf("Safari") > -1;
    if ((chromeAgent) && (this.esSafari)) this.esSafari = false;

    document.body.insertBefore(this.$el, document.body.firstChild);
    setTimeout(() => {
      this.$el.style.display = "flex";
    }, 2000);
    //animación interior
    setTimeout(() => {
      let article=this.$el.querySelector("article");
      //article.style.transform="translateX(0) rotateX(1440deg)";
      article.classList.add("activada");
    }, 2500);

  },
  methods: {
    cerrarPanel() {
      this.$emit("cerrando", "cerrando")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.splashNoticia {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: $colorFondoOpacidadNegro;
  z-index: $zSplashNoticia;
  justify-content: center;
  align-items: center;
  &.sinOpacidad{
    background-color: transparent;
  }
  article{
    -webkit-transform:translateX(-200%);
    transform:translateX(-200%);
    transition: transform 1.5s ease-out;
    &.activada{
      -webkit-transform:translateX(0) rotateX(1440deg);
      transform:translateX(0) rotateX(1440deg);
    }
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

</style>
