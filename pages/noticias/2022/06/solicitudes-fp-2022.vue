<template>
  <PaginaNoticia titulo="Solicitudes para Ciclos Formativos de FP" subtitulo="Curso 2022/23"
                 imagen="/img/escuela/documentos.jpg" >
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Te explicamos como realizar la solicitud para estudiar un ciclo formativo de FP con nosotros y el material que se necesita para estudiar. </p>
          <p>Haciendo clic en la imagen o en el enlace podrás ver y descargar la documentación que explica el proceso.</p>
          <p>De todas formas si tienes cualquier duda, puedes consultar con nosotros cuando quieras (tienes los datos de contacto al final de esta misma página). <strong>¡Estaremos encantados de ayudarte!</strong></p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Solicitudes para ciclos formativos de FP" src="/img/noticias/2022/06/info-solicitudes-fp.jpg"
        ancho-max="500px" enlace="https://drive.google.com/file/d/15xTlIo4nJmyfvFfzK1Q6c70yOk3DedMW/view?usp=sharing" />
        <TextoDetalle>
          <p><a href="https://drive.google.com/file/d/15xTlIo4nJmyfvFfzK1Q6c70yOk3DedMW/view?usp=sharing" target="_blank">Ver documento</a></p>
        </TextoDetalle>
      </ColumnaContenido>
    </FilaContenido>
  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";

export default {
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle}
}
</script>

<style scoped>

</style>
