<template>
  <main>
    <TituloGrande :titulo="titulo" :subtitulo="subtitulo" :imagen="'/img/textura1.jpg'"/>
    <SeccionOpaca v-html="contenido">

    </SeccionOpaca>
  </main>
</template>

<script>
import SeccionOpaca from "@/components/secciones/SeccionOpaca";
import TituloGrande from "@/components/secciones/TituloGrande";


export default {
  data(){
    return {
      contenido:Object,
      titulo:String,
      subtitulo:String
    }
  },
  components:{
    SeccionOpaca, TituloGrande
  },
  async asyncData({params}){
    const year=params.year;
    const month=params.month;
    const slug=params.slug;
    return{
      year,month,slug
    }
  },
  async fetch() {
    const texto = await fetch(
     //`@assets/data/noticias/${this.year}/${this.month}/${this.slug}`)
      `/posts/${this.year}/${this.month}/${this.slug}`)
      .then(res =>res.text())
      .catch(function(error) {
              console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
    let parser=new DOMParser();
    let html=parser.parseFromString(texto,"text/html");
    this.contenido=html.querySelector(".contenido").innerHTML;
    this.titulo=html.querySelector("h1").textContent;
    this.subtitulo=html.querySelector(".fecha").textContent;
  },
  mounted(){
    this.$fetch();
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

</style>
