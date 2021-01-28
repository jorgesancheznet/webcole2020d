<template>
  <main>
    <TituloGrande titulo="FP Dual" subtitulo="Formación en el puesto de trabajo" imagen="/img/escuela/estudio-dual.jpg" />
    <SeccionOpaca>
      <FilaContenido>
        <ColumnaContenido>
          <TextoDetalle titulo="Fp Dual">
            <p>Estamos comprometidos con la formación en FP Dual, cada vez son más empresas las que colaboran con nosotros en este nuevo paradigma de la Formación Profesional.</p>
            <p>Mediante la FP Dual los alumnos aplican en un puesto laboral real los conocimientos aprendidos durante el ciclo y además se siguen formando mediante un programa educativo acordado entre el centro y la empresa </p>
            <p>Para saber más:</p>
            <ul>
              <li><a href="https://drive.google.com/file/d/1ho1oJDMYVzi7eNMqgohyWl8Kfp73MzeN/view?usp=sharing" target="_self">Información al alumnado y familias sobre Fp Dual</a>.</li>
              <li><a href="https://drive.google.com/file/d/1ufM1yRvVW_5lE3BwitF_iJCFvMWl9TbY/view?usp=sharing" target="_self">Solicitud de acceso al Programa de Fp Dual.</a></li>
              <li><a href="https://drive.google.com/file/d/16hX7Cs4DC8y6Y4px7Jz6Lk2DZ--Se1XW/view?usp=sharing" target="_self">Listado Provisional Admitidos FP Dual.</a></li>
              <li><a href="https://drive.google.com/file/d/1ChYsw9Y7PtP_48jkn82wlrQYjyaw4r4w/view?usp=sharing" target="_self">Listado Definitivo Admitidos FP Dual.</a></li>
              <li><a href="https://drive.google.com/file/d/1tvW5XRpCKqAPqLgcp-0peNhr8o6EyWcw/view?usp=sharing" target="_self">Asignación de Puestos FP Dual.</a></li>
            </ul>
          </TextoDetalle>
        </ColumnaContenido>
        <ColumnaContenido>
          <ImagenDetalle ancho-max="600px" alt="Logo Fp Dual" src="/img/logos/dual.svg" />
        </ColumnaContenido>
      </FilaContenido>
      <FilaContenido>
        <TextoDetalle :style="'margin:auto'">
          <img src="/img/logos/logo-junta.png" alt="Junta de Castilla y Leon" class="logo normal">
          <img src="/img/logos/logo-grande.svg" alt="Salesianos de Villamuriel de Cerrato" class="logo min margen-izda">
          <img src="/img/logos/europa-impulsa.png" alt="Europa Impulsa" class="logo min">
        </TextoDetalle>

      </FilaContenido>
    </SeccionOpaca>
  </main>
</template>

<script>
import TituloGrande from "../../components/secciones/TituloGrande";
import SeccionOpaca from "../../components/secciones/SeccionOpaca";
import FilaContenido from "../../components/wrappers/FilaContenido";
import ColumnaContenido from "../../components/wrappers/ColumnaContenido";
import TextoDetalle from "../../components/TextoDetalle";
import ImagenDetalle from "../../components/items/ImagenDetalle";
export default {
  name: "fp-dual.vue",
  components: {ImagenDetalle, TextoDetalle, ColumnaContenido, FilaContenido, SeccionOpaca, TituloGrande}
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

li{
  font-size: 1.4em;
}
.logo{
  margin-right:2em;
  &.normal{
    height:120px;
  }
  &.min{
    height:80px;
  }
  &.margen-izda{
    margin: 0 -2em 0 2em;
  }
}

@media (max-width: $anchoGrande) {
  .logo{
    margin-right:1em;
    &.normal{
      height:80px;
    }
    &.min{
      height:40px;
    }
    &.margen-izda{
      margin: 0 -2em 0 0;
    }
  }
}
</style>
