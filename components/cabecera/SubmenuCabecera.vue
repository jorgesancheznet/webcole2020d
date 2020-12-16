<template>
<nav class="submenuCabecera" :style="'top:'+tope+'px'">
  <aside class="cierreSubmenu" @click="$emit('cierreSubmenu',datos.nombre)">
    <IconoSVG :d="iconoCierre.d" :viewBox="iconoCierre.viewBox" :ancho="50"></IconoSVG>
  </aside>
  <div class="submenu">
    <div class="seccion" v-for="seccion in datos.secciones">
      <p v-if="seccion.titulo" v-html="seccion.titulo" ></p>
      <ul>
        <li v-for="enlace in seccion.enlaces" >
          <a v-if="enlace.url.indexOf('/')!==0"
             :href="enlace.url" target="_blank" @click="$emit('cierreSubmenu',datos.nombre)">{{enlace.texto}}</a>
          <NuxtLink v-else :to="enlace.url" @click.native="$emit('cierreSubmenu',datos.nombre)">{{enlace.texto}}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import {iconoCierre} from "~/assets/svg/iconos";
import IconoSVG from "@/components/items/IconoSVG";
export default {
  name: "SubmenuCabecera",
  components: {IconoSVG},
  props:{
    tope:{
      type:Number,
      default:120
    },
    datos:{
      type:Object,
      default:()=>[]
    }
  },
  data(){
    return{
      iconoCierre:iconoCierre
    }
  },
  emits:["cierreSubmenu"]
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
.submenuCabecera{
  position: fixed;
  top:-200%;
  right:1em;
  padding:3em 1em;
  width:calc(80% - 1em);
  background-color: $colorCabecera;
  z-index: -1;
  transition:.5s top;
  aside{
    position: absolute;
    top:1em;
    right:2em;
    font-size:1.5em;
    color:$colorTenue;
    &:hover{
      color:$colorTenueHover;
    }
  }
  p{
    @include bordeFinoResaltado;
    text-transform: uppercase;
    @include letraNormal(light,1.2em,$colorTenue);
    margin:1em .1em .5em .1em;
  }
  ul{
    display:block;
    margin:0;
    padding:0;
    li{
      list-style-type: none;
      text-transform: uppercase;
      font-size: 1.2em;
      margin:.2em 0 0 1em;
      padding: 2px;
      a{
        color:$colorNormal;
        text-decoration:none;
      }
      &:hover {
        background-color: $colorRojoSalesiano;
        a {
          color: white;
        }
      }
    }
  }
  &>div{
    /*display:none;*/
  }
}

.cierreSubmenu{
  cursor:pointer;
  fill:$colorTenue;
  &:hover{
    fill:$colorTenueHover;
  }
}



</style>
