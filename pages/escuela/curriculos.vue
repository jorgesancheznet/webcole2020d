<template>
  <main>
    <SeccionOpaca>
      <FilaContenido>
        <ColumnaContenido>
          <ImagenDetalle src="/img/escuela/CV_salesianos_02.png"/>
        </ColumnaContenido>
        <ColumnaContenido>
          <TextoDetalle titulo="Recepción de Currículos">
            <p>
              Si quieres trabajar con nosotros, esta es tu sección
            </p>
            <p>
              Desde la inspectoria salesianda se ha creado una herramienta (<strong>CuCo</strong>, Currículos Comunes)
              que funciona a través de un formulario Google, ´que podrás rellenar y aportar tu consentimiento expreso
              para que tratemos tus datos, al tiempo que se te comunica nuestra política de protección de datos,
            </p>
            <p>
              Puedes acceder a esta herramienta desde el <a href="https://forms.gle/Bt6nvG97gxPiX9j48">siguiente
              enlace</a>
            </p>
          </TextoDetalle>
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
import TextoDetalle from "../../components/TextoDetalle";

export default {
  name: "curriculos.vue",
  components: {TextoDetalle, ImagenDetalle, ColumnaContenido, FilaContenido, SeccionOpaca},
  head() {
    return {
      title: "Salesianos - Centro Don Bosco de Villamuriel de cerrato, recepción de currículos"
    }
  }
}
</script>

<style scoped>

</style>
