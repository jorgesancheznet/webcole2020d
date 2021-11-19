<template>
  <PaginaNoticia titulo="Inicio curso 2021/22" subtitulo="Bienvenida e instrucciones"
                 imagen="/img/escuela/documentos.jpg" >
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Comenzamos curso y no solo mantenemos nuestra ilusión, sino que este año estamos aun más emocionados por el inicio. </p>
          <p>En el documento que acompaña a esta noticia damos la bienvenida a nuestras alumnas, alumnos y familias. Además es muy importante leerlo ya que contiene instrucciones muy a tener en cuenta para comenzar este curso.</p>
          <p>Estamos totalmente convencidos de que llevaremos a buen puerto todas las vicisitudes que surgen en este curso que ¡estamos deseando empezar!</p>
          <p><a href="https://drive.google.com/file/d/1aDjukIBrk_jar4L4d0eBUv514cU4JKKt/view?usp=sharing" target="_blank">Leer documento de bienvenida e instrucciones</a></p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Instrucciones de inicio del curso 021/22" src="/img/noticias/2021/09/inicio-curso-blur.jpg"
        ancho-max="500px" enlace="https://drive.google.com/file/d/1aDjukIBrk_jar4L4d0eBUv514cU4JKKt/view?usp=sharing" />
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
