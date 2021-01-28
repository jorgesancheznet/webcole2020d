<template>
  <main>
    <TituloGrande titulo="Educación Secundaria" subtitulo="ESO" imagen="/img/ciclos/fondo-eso.jpg" />

  </main>
</template>

<script>


import TituloGrande from "@/components/secciones/TituloGrande";

import ContenedorFotos from "../../components/wrappers/ContenedorFotos";

export default {
  name: "eso",
  data(){
    return{

    }
  },
  head(){
    return{
      title:"Educación Secundaria Obligatoria (ESO), Salesianos Centro Don Bosco de Villamuriel de Cerrato"
    }
  }
}
</script>
