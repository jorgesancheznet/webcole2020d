<template>
  <main>
    <TituloGrande titulo="Escuela de nivel 5 en TIC" subtitulo="Máximo nivel de excelencia en aplicación de TIC" imagen="/img/escuela/tic.jpg" />
    <SeccionOpaca>
      <FilaContenido>
        <ColumnaContenido>
          <TextoDetalle>
            <p>El centro Don Bosco de Villamuriel de Cerrato obtuvo el nivel de certificación TIC más alto, el<strong>
              Códice TIC de nivel 5</strong>.</p>
            <p>Este reconocimiento supone un espaldarazo a nuestra apuesta, desde hace muchos años, por el apoyo que la tecnología proporciona a nuestra metodología docente</p>
            <p>La certificación verifica que:</p>
            <ul>
              <li>Existe una integración excelente de las TIC en el Centro en todas las etapas educativas.</li>
              <li>Los equipamientos informáticos cumplen con las fases de renovación y están integrados en el 100% de los procesos educativos.</li>
              <li>Los planes del centro asumen las herramientas como un proceso integrado, logrando mejoras continuas en los resultados</li>
              <li>Se proporciona formación continua y asociada al uso y entorno TIC (aplicación de herramientas en formación).</li>
              <li>La implicación y el conocimiento en TIC es muy alto y se aplican en la totalidad de los procesos.</li>
            </ul>
            <p>Esto no significa un punto y final en nuestra estrategia de integración de la tecnología, sino una motivación extra para continuar buscando la excelencia en la aplicación de metodologías activas que impulsen la motivación y un alto grado de desempeño en todo nuestro alumnado.</p>
          </TextoDetalle>
        </ColumnaContenido>
        <ColumnaContenido>
          <ImagenDetalle ancho-max="400px" alt="Logo Codice TIC 5" src="/img/logos/tic5-grande.png" />
        </ColumnaContenido>
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
  font-size: 1.3em;
  margin-bottom: .5em;
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
