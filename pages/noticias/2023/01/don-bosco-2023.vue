<template>
  <PaginaNoticia titulo="Fiestas de Don Bosco 2023"
                 imagen="/img/fondos/fondo.jpg" subtitulo="Celebramos el día grande salesiano">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Un año más celebramos uno de nuestros días más señalados: el 31 de Enero, <strong>Fiesta de Don Bosco</strong>
          </p>
          <p>
            Durante una semana hemos realizado competiciones deportivas, actos culturales y el colofón de la gala en el teatro Jesús Meneses de Villamuriel de Cerrato, en la que nuestros alumnos y alumnas han puesto de manifiesto su creatividad y calidad para realizar sus creaciones audiovisuales.
          </p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>
          Han sido días que nos han permitido aumentar la cercanía de toda la comunidad educativa y reencontrarnos con la figura de nuestro fundador, Don Bosco, y a la misión que nos ha encomendado: la educación de los jóvenes.
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
      rutaMini:`/img/noticias/2023/01/donbosco/bosco${iNorm}-mini.jpg`,
      ruta:`/img/noticias/2023/01/donbosco/bosco${iNorm}.jpg`,
      alt:`Fiestas de Don Bosco 2023`,
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
      fotos: getFotos(19)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/constantes.scss";
@import "~assets/estilos/mixins.scss";


</style>
