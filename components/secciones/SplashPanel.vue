<template>
  <section :id="idSeccion">
    <div class="titulosPortada" v-if="mostrarTitulos"
    data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
      <h1 v-html="titulo"></h1>
      <p v-html="subtitulo"></p>
    </div>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "SplashPanel",
  props:{
    idSeccion:String,
    titulo:String,
    subtitulo:String,
    imagen:String
  },
  data(){
    return{
      mostrarTitulos:false
    }
  },
  mounted(){
    document.documentElement.style.setProperty('--urlImagen',
      `url("${this.imagen}")`);
    setInterval(()=>{this.mostrarTitulos=true},200);
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
@import "~assets/estilos/transiciones.scss";

section{
  position:relative;
  width:100%;
  height:100vh;
  background: #474545 var(--urlImagen) no-repeat center center fixed;
  background-size: cover;
  h1{
    text-align: left;
  }
  p{
    color:white;
  }
}
.titulosPortada{
  position:absolute;
  bottom:4em;
  left:4em;
  color:white;
  h1{
    @include letraNormal(normal,4em,$colorCabecera);
    font-size:4em;
  }
  p{
    @include letraNormal(normal,4em,$colorCabecera);
    font-size:2em;
  }
}
</style>
