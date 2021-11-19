<template>
  <main>
    <TituloGrande titulo="Servicio CuCo" subtitulo="Recepción de Curriculum Vitae" imagen="/img/fondos/paper.jpg"/>
    <SeccionOpaca>
      <FilaContenido>
        <ColumnaContenido>
          <TextoDetalle titulo="¿Qué es el Servicio CuCo">
            <p>
              Si quieres trabajar con nosotros, esta es tu sección.
            </p>
            <p>
              Hemos creado una herramienta (<strong>CuCo</strong>, Currículos Comunes)
              para recoger los currículos de las personas interesadas en trabajar con nosotros.
            </p>
            <p>
              Si quieres enviarnos tu currículo, puedes acceder a esta herramienta desde el siguiente enlace: <a href="https://forms.gle/Bt6nvG97gxPiX9j48" target="_blank">Formulario de Bolsa de empleo, Inspectoría Salesiana Santiago el Mayor</a>
            </p>
          </TextoDetalle>
        </ColumnaContenido>
        <ColumnaContenido color-fondo="#dc001b">
          <ImagenDetalle src="/img/escuela/CV_salesianos_02.png" ancho-max="300px"/>
        </ColumnaContenido>
      </FilaContenido>
    </SeccionOpaca>
  </main>
</template>

<script>
import SeccionOpaca from "../../components/secciones/SeccionOpaca";
import FilaContenido from "../../components/wrappers/FilaContenido";
import ColumnaContenido from "../../components/wrappers/ColumnaContenido";
import ImagenDetalle from "../../components/items/ImagenDetalle";
import TextoDetalle from "../../components/wrappers/TextoDetalle";
import TituloGrande from "../../components/secciones/TituloGrande";

export default {
  name: "curriculos.vue",
  components: {TituloGrande, TextoDetalle, ImagenDetalle, ColumnaContenido, FilaContenido, SeccionOpaca},
  head() {
    return {
      title: "Salesianos - Centro Don Bosco de Villamuriel de cerrato, recepción de currículos"
    }
  }
}
</script>

<style scoped>

</style>
