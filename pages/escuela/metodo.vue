<template>
  <main>
    <TituloGrande titulo="Nuestro método educativo" imagen="/img/escuela/idea.jpg"/>

    <FondoSticky urlImagen="/img/escuela/peatones.jpg"/>
    <TituloSticky titulo="Caminamos juntos"/>
    <TextoSticky>
      <p>Queremos ser una compañía sólida en tu caminar por el proceso educativo</p>
      <p>Estamos siempre disponibles y priorizamos la cercanía entre alumnos y profesores a todos los niveles</p>
    </TextoSticky>
    >
    <FondoSticky urlImagen="/img/escuela/salto.jpg"/>
    <TituloSticky titulo="Estamos ilusionados"/>
    <TextoSticky>
      <p>Creemos en lo que hacemos y se nota</p>
      <p>Tenemos ganas, siempre buscamos mejorar, la búsqueda de la excelencia empieza por nuestras ganas continuas de superarnos</p>
    </TextoSticky>

    <FondoSticky urlImagen="/img/escuela/asir-rol.jpg"/>
    <TituloSticky titulo="Aprendizaje cooperativo"/>
    <TextoSticky>
      <p>Fomentamos el trabajo en equipo con estrategías de aprendizaje compartido</p>
      <p>Usamos métodos de autoevaluación y cooevaluación para que los propios alumnos y alumnas tomen conciencia de su
        proceso de aprendizaje</p>
    </TextoSticky>

    <FondoSticky urlImagen="/img/escuela/aprender.jpg"/>
    <TituloSticky titulo="Aprendizaje desde la experiencia"/>
    <TextoSticky>
      <p>Nuestro método educativo busca el aprendizaje significativo</p>
      <p>Creemos en un aprendizaje práctico donde los alumnos desarrollen su conocimiento a través de la experimentación </p>
    </TextoSticky>

    <FondoSticky urlImagen="/img/escuela/proyecto1.jpg"/>
    <TituloSticky titulo="Aprendizaje basado en proyectos"/>
    <TextoSticky>
      <p>Creemos en las metodologías basadas en el aprendizaje basado en retos y tareas</p>
      <p>Las metodologías activas son la base de nuestra trabajo educativo</p>
    </TextoSticky>

    <FondoSticky urlImagen="/img/escuela/1a1.jpg"/>
    <TituloSticky titulo="Somos un centro muy TIC" />
    <TextoSticky>
      <p>Es una de nuestras señas de identidad: hacemos un uso inteligente de la tecnología en apoyo de la enseñanza</p>
      <p>Cada alumno dispone de su propio dispositivo preparado exclusivamente para el aprendizaje</p>
    </TextoSticky>

    <FondoSticky urlImagen="/img/escuela/lazo.jpeg" />
    <TituloSticky titulo="Educamos en valores" />
    <TextoSticky>
      <p>Trabajamos en pro de la igualdad, solidaridad y respeto de los seres humanos sea cual sea su creencia, sexo,
        origen y posición social</p>
      <p>Transmitimos un modo de vida vocacional impulsando un sentido ético de la misma</p>
    </TextoSticky>

    <FondoSticky urlImagen="/img/escuela/familias.jpg" />
    <TituloSticky titulo="Trabajamos con las familias" />
    <TextoSticky>
      <p>Nuestra cercanía se extiende a las familias, buscamos un trato directo</p>
      <p>Nuestro proyecto educativo busca una implicación directa y coordinada entre familias y equipo educativo</p>
    </TextoSticky>

    <FondoSticky urlImagen="/img/escuela/como-casa.jpg" />
    <TituloSticky titulo="Orgullosos de nuestra identidad" />
    <TextoSticky>
      <p>Somos un centro cristiano y fomentamos un sentido trascendente de la vida</p>
      <p>Somos un centro salesiano lo que coloca en el centro de nuestro trabajo a la inclusión social de los jóvenes</p>
    </TextoSticky>

    <Pie />

  </main>
</template>

<script>
import TituloGrande from "@/components/secciones/TituloGrande";
import TituloMedio from "@/components/secciones/TituloMedio";
import FondoSticky from "@/components/secciones/FondoSticky";
import TextoSticky from "@/components/secciones/TextoSticky";
import TituloSticky from "@/components/secciones/TituloSticky";
import Pie from "@/components/pie/Pie";

export default {
  name: "metodo.vue",
  layout: "sticky",
  components: {
    TituloGrande, FondoSticky, TextoSticky, TituloSticky, TituloMedio, Pie
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

main {
  position: absolute;
  left: 0;
  top: 80px;
  width: 100%;
  height: 100%;
  overflow: auto;
}

#foto1 {
  background-image: url("/img/escuela/escaleras-negro.jpg");
}
</style>
