<template>
  <section class="splashNoticia" @click="cerrarPanel">
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
    }
  },
  mounted() {
    document.body.insertBefore(this.$el, document.body.firstChild);
    setTimeout(() => {
      this.$el.style.display = "flex";
    }, 2000);
    //animación interior
    setTimeout(() => {
      let article=this.$el.querySelector("article");
      article.style.opacity=1;
      article.style.transform="translateX(0) rotateX(1440deg)";
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
  article{
    opacity:0;
    transform:translateX(-100%);
    transition: all 3s ease-out;
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
