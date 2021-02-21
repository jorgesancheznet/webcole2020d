<template>
<main>
  <TituloGrande titulo="Nuestro método educativo" imagen="/img/textura1.jpg" />
  <SeccionSticky titulo="Educacion en valores" urlImagen="/img/escuela/escaleras-gris.jpg" />

  <TextoSticky>
    <p>Trabajamos en pro de la igualdad, solidaridad y respeto de los seres humanos sea cual sea su creencia, sexo, origen y posición social</p>
    <p>Transmitimos un modo de vida vocacional impulsando un sentido ético de la misma</p>
    <p>Somos un centro cristiano y nos inspiramos en los valores del Evangelio para la trascendencia de la vida</p>
  </TextoSticky>>
  <SeccionSticky urlImagen="/img/escuela/globos.jpg" />
</main>
</template>

<script>
import TituloGrande from "@/components/secciones/TituloGrande";
import SeccionSticky from "@/components/items/SeccionSticky";
import TextoSticky from "@/components/items/TextoSticky";
export default {
  name: "metodo.vue",
  layout: "sticky",
  components:{
    TituloGrande,SeccionSticky,TextoSticky
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
main{
  position:absolute;
  left:0;
  top:80px;
  width:100%;
  height:100%;
  overflow:auto;
}

#foto1{
  background-image: url("/img/escuela/escaleras-negro.jpg");
}
</style>
