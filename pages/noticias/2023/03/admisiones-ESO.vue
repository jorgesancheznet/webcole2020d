<template>
  <PaginaNoticia titulo="Periodo de admisiones para estudiar la ESO"
                 imagen="/img/textura1.jpg" subtitulo="¿Quieres estudiar con nosotros?">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>El próximo día 17 de marzo se abre el plazo de admisiones. Todo el proceso, plazos e instrucciones está dispinible , todo el proceso está disponible en el un documento al que puedes acceder a través del siguiente enlace.</p>
          <EnlaceBoton url="https://drive.google.com/file/d/1j0g09ogTeCN_mkIPdNVTc3OPJ6XIVDwd/view?usp=sharing"
                       texto="Acceder a toda la información" blank="blank"/>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle src="/img/noticias/2023/03/prematricula-ESO.jpg" alt="Admisiones ESO"
                       enlace="https://drive.google.com/file/d/1j0g09ogTeCN_mkIPdNVTc3OPJ6XIVDwd/view?usp=sharing" ancho-max="500px"/>
      </ColumnaContenido>
    </FilaContenido>


  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";
import ImagenDetalle from "@/components/items/ImagenDetalle";
import EnlaceBoton from "@/components/items/EnlaceBoton";

export default {
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle, ImagenDetalle, EnlaceBoton},
}
</script>

<style scoped>

</style>
