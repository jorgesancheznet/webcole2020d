<template>
<div class="ficha swiper-slide" @click="lanzarEnlace" :class="{mini:mini}"
     :data-aos-delay="aleatorio(retardoMin,retardoMax)"
     :data-aos="efecto"
     :data-aos-duration="aleatorio(duracionMin,duracionMax)"
     :data-aos-easing="easing"  :data-aos-once="once">
  <figure v-if="contenido.imagen">
    <img :src="contenido.imagen" :alt="contenido.alt">
  </figure>
  <h3 v-if="contenido.titulo">
    <a :href="contenido.url" :target="(contenido.blank?'_blank':'_self')">{{contenido.titulo}}</a>
  </h3>
  <p v-if="contenido.subtitulo" class="subtituloH3">
    {{contenido.subtitulo}}
  </p>
  <p v-if="contenido.contenido" v-html="contenido.contenido"></p>
  <p class="mas" v-if="!(contenido.noMas)">
    <a a :href="contenido.url" :target="(contenido.blank?'_blank':'_self')">Contenido completo</a>
  </p>
</div>
</template>

<script>
import {aleatorio, utiles} from "~/assets/lib/utiles";
export default {
  name: "Ficha",
  props:{
    contenido:{
      type:Object,
      default:{}
    },
    mini:{
      type:Boolean,
      default:false
    },
    retardoMin:{
      type:Number,
      default:0
    },
    retardoMax:{
      type:Number,
      default:0
    },
    efecto:{
      type:String,
      default:"flip-up"
    },
    duracionMin:{
      type:Number,
      default:0
    },
    duracionMax:{
      type:Number,
      default:0
    },
    easing:{
      type:String,
      default:"ease-out-cubic"
    },
    once:{
      type: Boolean,
      default: true
    }
  },
  methods:{
    lanzarEnlace(e){
      let enlace=e.target.querySelector(".mas a");
      if(enlace){
        enlace.click();
      }
    },
    aleatorio(min,max){
      return   Math.round(Math.random()*(max-min)+parseInt(min))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";


.rojo {
  color: red;
}


.ficha{
  display:inline-block;
  width: $anchoFicha !important;
  padding: $paddingFicha;
  border-radius: $radioFicha;
  margin: $margenFicha;
  height: auto;
  background-color: $colorFicha;

  &:hover {
    opacity:1;

    figure {
      img {
        filter: saturate(300%);
        transition: .5s filter;
      }
    }
  }

  figure {
    width: $anchoFicha;
    padding: 0;
    margin: 0 auto;
    border-radius: $radioFicha;
    overflow: hidden;

    img {
      width: $anchoFicha;
      border-radius: $radioFicha;
      filter: saturate(100%);
    }
  }


  h3 {
    margin: 1em 0 0 0;
    @include letraNormal(normal, 2em, $colorGrisSalesiano);
    text-align: center;

  }


  p {
    margin: 1em 0;

    &.subtituloH3 {
      @include letraNormal(light, 1.2em, $colorGrisSalesiano);
      margin: .5em 0;
      text-align: center;
      &.inView{
        transform:scaleX(1);
      }
    }



    &.mas {
      text-align: center;

      a {
        font-size: 1.2em;
      }
    }
  }

  &.mini {
    padding: 5px;
    width: $anchoFichaServicios + 20px !important;

    h3 {
      font-size: 1.5em;
    }

    figure {
      width: $anchoFichaServicios;
      img {
        width: $anchoFichaServicios;
      }
    }
  }
}

@media (max-width: $anchoMovil) {

  .ficha {
    width: $anchoFichaMin !important;
    padding: $paddingFichaMin;
    border-radius: $radioFichaMin;
    margin: $margenFichaMin;

    figure {
      width: $anchoFichaMin;

      img {
        width: $anchoFichaMin;
      }
    }

    h3 {
      font-size: 1.6em;
    }

    p {
      &.subtituloH3 {
        font-size: 1em;
      }
    }
  }

}
</style>
