<template>
  <aside id="novedades"
         data-aos="fade-left" :data-aos-delay="tiempoAparicion" :data-aos-duration="tiempoTransicion" v-if="mostrarPanel">
    <h2>{{titulo}}</h2>
    <ul>
      <li v-for="noticia in obtenerNoticias"><a :href="noticia.url">{{noticia.titulo}}</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "PanelNovedades",
  props:{
    titulo:String,
    entradas:Array,
    tiempoTransicion:{
      type:String,
      default:"5000"
    },
    tiempoAparicion:{
      type:String,
      default:"2000"
    }
  },
  data(){
    return{
      mostrarPanel:false
    }
  },
  computed:{
    obtenerNoticias(){
      return this.entradas.slice(0,4);
    }
  },
  mounted(){
    setInterval(()=>{this.mostrarPanel=true},2000);
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
@import "~assets/estilos/transiciones.scss";


#novedades{
  @include letraNormal(light,1.2em,$colorTenue);
  position:absolute;
  top:$altoCabecera + 40px;
  right:2em;
  padding:0;
  color:$colorTenue;
  border:1px solid $colorFicha;
  font-size:1.5em;
  background-color:rgba(0,0,0,.5);
  h2{
    @include letraNormal(light,1.2em,$colorGrisSalesiano);
    text-align: center;
    margin:0;
    background-color: $colorFicha;
  }
  ul{
    margin:0;
    padding:0 1em 0 0;
    list-style-type: none;
    li{
      margin:.1em 0 .5em 1em;
      a{
        color:$colorTenue;
        &:hover{
          color:$colorTenueBrillo;
        }
      }
    }
  }
}
@media screen and  (max-width: $anchoMovil){
  #novedades{
    font-size:1em;
  }
}
</style>
