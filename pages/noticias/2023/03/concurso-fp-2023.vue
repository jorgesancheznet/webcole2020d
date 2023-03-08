<template>
  <PaginaNoticia titulo="Concurso de FP 2023"
                 imagen="/img/fondos/fondo.jpg" subtitulo="Feria de FP 2023 #RumboFP">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Nuestros alumnos de FP participaron en el concurso de FP (RumboFP) con motivo de la Feria de FP 2023.
          </p>
          <p>El concurso permitió que los alumnos resolvieran un reto relacionado con su rama de estudios</p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>
            Los futuros profesionales han demostrado su valía en la competición y hemos podido disfrutar de sun buen hacer.
          </p>
        </TextoDetalle>
      </ColumnaContenido>
    </FilaContenido>
    <TituloIndependiente titulo="FOTOS" id="t1"/>
    <SeccionOpaca colorFondo="#999999">
      <ContenedorFotos :fotos="fotos"/>
    </SeccionOpaca>
  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";
import ImagenDetalle from "@/components/items/ImagenDetalle";
import ContenedorFotos from "~/components/wrappers/ContenedorFotos";
import SeccionOpaca from "~/components/secciones/SeccionOpaca";
import TituloIndependiente from "~/components/wrappers/TituloIndependiente";
function getFotos(tam){
  let res=[];
  let iNorm=0;
  for (let i=0;i<tam;i++){
    iNorm=i+1;
    if(iNorm<10) iNorm="0"+iNorm;
    res[i]={
      rutaMini:`/img/noticias/2023/03/feriafp${iNorm}-mini.jpg`,
      ruta:`/img/noticias/2023/03/feriafp${iNorm}.jpg`,
      alt:`Concurso de FP 2023`,
      id:`foto${i+1}`
    }
  }
  return res;
}
export default {
  components: {
    PaginaNoticia,
    FilaContenido,
    ColumnaContenido,
    TextoDetalle,
    ImagenDetalle,
    ContenedorFotos,
    SeccionOpaca,
    TituloIndependiente
  },
  data() {
    return {
      fotos: getFotos(4)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/constantes.scss";
@import "~assets/estilos/mixins.scss";


</style>
