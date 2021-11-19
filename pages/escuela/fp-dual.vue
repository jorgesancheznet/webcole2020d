<template>
  <main>
    <TituloGrande titulo="FP Dual" subtitulo="Formación en el puesto de trabajo" imagen="/img/escuela/estudio-dual.jpg" />
    <SeccionOpaca>
      <FilaContenido>
        <ColumnaContenido>
          <TextoDetalle titulo="Fp Dual">
            <p>Estamos comprometidos con la formación en FP Dual, cada vez son más empresas las que colaboran con nosotros en este nuevo paradigma de la Formación Profesional.</p>
            <p>Mediante la FP Dual los alumnos aplican en un puesto laboral real los conocimientos aprendidos durante el ciclo y además se siguen formando mediante un programa educativo acordado entre el centro y la empresa </p>
           </TextoDetalle>
        </ColumnaContenido>
        <ColumnaContenido>
          <ImagenDetalle ancho-max="600px" alt="Logo Fp Dual" src="/img/logos/dual.svg" />
        </ColumnaContenido>
      </FilaContenido>
      <FilaContenido>
          <TextoDetalle titulo="Documentos e Información" ancho="100%">
            <CarpetaDrive src="https://drive.google.com/embeddedfolderview?id=1hViNbdgpD2TCv919cxIh5ZyTiggiwSh9#grid" />
          </TextoDetalle>
      </FilaContenido>

      <FilaContenido>
        <TextoDetalle :style="'margin:auto'">
          <img src="/img/logos/logo-junta.png" alt="Junta de Castilla y Leon" class="logo normal">
          <img src="/img/logos/logo-grande.svg" alt="Salesianos de Villamuriel de Cerrato" class="logo min margen-izda">
          <img src="/img/logos/europa-impulsa.png" alt="Europa Impulsa" class="logo min">
        </TextoDetalle>

      </FilaContenido>
      <FilaContenido>
        <br><br><br>
      </FilaContenido>
    </SeccionOpaca>
  </main>
</template>

<script>
import TituloGrande from "../../components/secciones/TituloGrande";
import SeccionOpaca from "../../components/secciones/SeccionOpaca";
import FilaContenido from "../../components/wrappers/FilaContenido";
import ColumnaContenido from "../../components/wrappers/ColumnaContenido";
import TextoDetalle from "../../components/wrappers/TextoDetalle";
import ImagenDetalle from "../../components/items/ImagenDetalle";
import CarpetaDrive from "@/components/items/CarpetaDrive";
export default {
  name: "fp-dual.vue",
  components: {ImagenDetalle, TextoDetalle, ColumnaContenido, FilaContenido, SeccionOpaca, TituloGrande,CarpetaDrive}
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
  iframe{
    width:100%;
    height:400px;
    overflow: auto;
    border:none;
    text-align: center;
  }
}
</style>
