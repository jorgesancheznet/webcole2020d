<template>
  <header id="cabecera">
    <div id="contenidoCabecera">
      <figure id="logoPrincipal" v-if="mostrarLogo">
        <a href="/">
          <img src="/img/logos/logo-grande.svg" alt="Salesianos de Villamuriel de cerrato">
        </a>
      </figure>
      <nav id="menuCabecera" v-if="mostrarMenu">
        <ul>
          <li v-for="submenu in submenuCabecera" >
            <a href="#" @click.prevent="mostrarSubmenu">
               {{submenu.nombre}}
            </a>
          </li>
        </ul>
      </nav>
      <div id="capaIconoMenuCabecera" v-if="mostrarIconoMenu" :click.preventDefault="clickIconoMenu">
        <IconoSVG v-if="hayIconoMenu" :ancho="38" :d="iconoMenu.d" :view-box="iconoMenu.viewBox" />
        <IconoSVG v-else :ancho="38" :d="iconoMenu.d" :view-box="iconoMenu.viewBox" />
      </div>
    </div>
    <transition name="acordeon" mode="out-in">
      <SubmenuCabecera v-for="submenu in submenuCabecera" :key="submenu.nombre" v-if="comprobarSubmenuVisible(submenu.nombre)" :datos="submenu" :tope="tope" @cierreSubmenu="ocultaSubmenu"></SubmenuCabecera>
    </transition>
  </header>
</template>

<script>
import {iconoCierre,iconoMenu} from "~/assets/svg/iconos";
import {submenuCabecera} from "~/assets/data/submenuCabecera";

import IconoSVG from "~/components/IconoSVG";
import SubmenuCabecera from "~/components/cabecera/SubmenuCabecera";

const ALTO_CABECERA = 120;
const ALTO_CABECERA_MIN = 60
const TRANSICION_CABECERA = 1;
const ANCHO_MEDIO = 850;

export default {
  name: "Cabecera",
  components: {IconoSVG, SubmenuCabecera},
  props:{
    submenuCabecera:Array
  },
  data(){
    return{
      hayIconoMenu : true,
      mostrarMenu : true,
      mostrarIconoMenu : false,
      mostrarLogo : true,
      submenuVisible : "",
      arriba : ALTO_CABECERA + "px",
      iconoMenu:iconoMenu,
      iconoCierre:iconoCierre,
      tope:ALTO_CABECERA
    }
  },
  methods:{
    comprobarSubmenuVisible(texto){
      return this.submenuVisible.trim()==texto.trim();
    },
    recalculoCabecera() {
      if (innerWidth >= ANCHO_MEDIO) {
        this.mostrarMenu = true;
        this.mostrarIconoMenu = false;
      } else {
        this.mostrarMenu = false;
        this.mostrarIconoMenu = true;
      }
    },

    clickIconoMenu() {
      if (!hayIconoMenu) {
        this.hayIconoMenu = true;
        this.mostrarLogo = true;
        this.mostrarMenu = false;
      } else {
        this.hayIconoMenu = false;
        this.mostrarLogo = false;
        this.mostrarMenu = true;
      }
    },

    mostrarSubmenu(e) {
      this.submenuVisible = e.target.textContent;
    },

    ocultaSubmenu(e) {
      this.submenuVisible = "";
    }
  },
  mounted() {
    let cabecera = document.getElementById("cabecera");
    let menuCabecera = document.getElementById("menuCabecera");
    let capaIconoMenuCabecera = document.getElementById("capaIconoMenuCabecera");
    let logoPrincipal = document.getElementById("logoPrincipal");
    let submenuCabecera = document.getElementById("submenuCabecera");
    let enlacesMenuCabecera = document.querySelectorAll("#menuCabecera a");
    let seccionesSubmenuCabecera = document.querySelectorAll("#submenuCabecera .submenu");
    let cierreSubmenu = document.getElementById("cierreSubmenu");
    let menuVisible = false;

    this.recalculoCabecera();

    //Poner la cabecera en estado inicial al cambiar el tamaño de la ventana
    window.addEventListener("resize", (e) => {
      this.recalculoCabecera();
    });

    //**** Efecto scroll de la cabecera
    window.addEventListener("scroll", (e) => {
      cabecera.style.transition = `${TRANSICION_CABECERA}s height`;
      if (window.scrollY > 5) {
        cabecera.style.height = ALTO_CABECERA_MIN + "px";
        //recolocación submenú
        this.arriba = ALTO_CABECERA_MIN + "px";
      } else {
        cabecera.style.height = ALTO_CABECERA + "px";
        //recolocación submenú
        this.arriba = ALTO_CABECERA + "px";
      }

    });
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
@import "~assets/estilos/transiciones.scss";

header {
  position: fixed;
  left: 0;
  top: 0;
  height: $altoCabecera;
  width: 100%;
  background-color: $colorCabecera;
  padding: 5px;
  z-index: $zCabecera;

}

#contenidoCabecera {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: $colorCabecera;
}

#logoPrincipal {
  height: 90%;
  overflow: visible;
  margin: 0;
  padding: 0 .5em 0 0;

  img {
    height: 100%;
  }
}

#menuCabecera{
  padding:10px 4em 10px 10px;
  display:block;
  z-index:100;
  ul{
    margin:0;
    padding:0;
    li{
      display:inline-block;
      padding:0 .15em;
      a{
        @include letraNormal(light,1.3em,$colorTenue);
        transition:0.5s color;
        &:hover{
          color:$colorTenueHover;
          transition:0.5s color;
        }
      }
    }
  }
}

#capaIconoMenuCabecera{
  fill:$colorTenue;
  cursor:pointer;
  &:hover{
    fill:$colorTenueHover;
  }
  width:50px;
}


@media (max-width: $anchoMovil) {
  #logoPrincipal {
    height: 50px;
  }
}

@media (max-width: $anchoMiniMovil) {
  #menuCabecera{
    ul{
      li{
        a{
          font-size: 1em;
        }
      }
    }
  }
  #logoPrincipal {
    height: 30px;
  }

}
</style>
