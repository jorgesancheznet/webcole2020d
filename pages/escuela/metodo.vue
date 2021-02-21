<template>
<main>
  <TituloGrande titulo="Nuestro método educativo"  imagen="/img/escuela/idea.jpg" />

  <FondoSticky  urlImagen="/img/escuela/peatones-gris.jpg" />
  <TituloSticky titulo="Caminamos juntos" />
  <TextoSticky>
    <p>Buscamos acompañar por encima de imponer</p>
    <p>Dialogar por encima de imponer</p>
    <p>Somos profesores, pero sabemos que el centro del aprendizaje deben de ser nuestros alumnos</p>
  </TextoSticky>>
  <FondoSticky urlImagen="/img/escuela/salto.jpg" />

  <FondoSticky urlImagen="/img/escuela/asir-rol-gris.jpg" />
  <TituloSticky titulo="Aprendizaje cooperativo" />
  <TextoSticky>
    <p>Fomentamos el trabajo en equipo con estrategías de aprendizaje compartido</p>
    <p>Usamos métodos de autoevaluación y cooevaluación para que los propios alumnos y alumnas tomen conciencia de su proceso de aprendizaje</p>
  </TextoSticky>
  <FondoSticky urlImagen="/img/escuela/aprender.jpg" />

  <FondoSticky urlImagen="/img/escuela/escaleras-gris.jpg" />
  <TituloSticky titulo="Educamos en valores" />
  <TextoSticky>
    <p>Trabajamos en pro de la igualdad, solidaridad y respeto de los seres humanos sea cual sea su creencia, sexo, origen y posición social</p>
    <p>Transmitimos un modo de vida vocacional impulsando un sentido ético de la misma</p>
    <p>Somos un centro cristiano y nos inspiramos en los valores del Evangelio para trasladar un sentido transcendente de la vida</p>
  </TextoSticky>
  <FondoSticky urlImagen="/img/escuela/lazo.jpeg" />
</main>
</template>

<script>
import TituloGrande from "@/components/secciones/TituloGrande";
import TituloMedio from "@/components/secciones/TituloMedio";
import FondoSticky from "@/components/items/FondoSticky";
import TextoSticky from "@/components/items/TextoSticky";
import TituloSticky from "@/components/items/TituloSticky";

export default {
  name: "metodo.vue",
  layout: "sticky",
  components:{
    TituloGrande,FondoSticky,TextoSticky,TituloSticky,TituloMedio
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
