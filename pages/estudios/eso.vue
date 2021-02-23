<template>
  <main>
    <TituloGrande titulo="Educación Secundaria" subtitulo="ESO" imagen="/img/ciclos/fondo-eso.jpg"/>
    <SeccionOpaca>
      <FilaContenido>
        <ColumnaContenido>
          <ImagenDetalle src="/img/oferta/info/eso.jpg" alt="ESO"/>
        </ColumnaContenido>
        <ColumnaContenido>
          <TextoDetalle titulo="Los Estudios de Educación Secundaria">
            <p>Desde el centro Don Bosco entendemos la importancia que tiene esta etapa en la formación de la persona a
              todos los niveles. Por ello trabajamos en esta etapa desde la consciencia de la importancia de la
              motivación personal y la implicación del alumnado en su propio conocimiento</p>
            <p>La Educación Secundaria Obligatoria (ESO) cubre la etapa en la cual los alumnos y alumnas tomarán las
              primeras decisiones importantes sobre su futuro personal y profesional en un camino en el que nuestro
              acompañamiento busca la mayor calidad educativa. </p>
            <p>No nos quedamos solo en los contenidos académicos, queremos ir más allá. Trabajamos por una enseñanza en
              valores con el objetivo de que nuestro alumnado se convierta en personas seguras, felices e implicadas en
              la mejora de su entorno social, cultural y ecológico.</p>
          </TextoDetalle>
        </ColumnaContenido>
      </FilaContenido>
    </SeccionOpaca>
    <SeccionTransparente titulo="CLAVES">
      <FilaIconos>
        <IconoRama nombre="Excelencia Educativa" :icono="university"/>
        <IconoRama nombre="Acompañamiento" :icono="chalkboardTeacher"/>
        <IconoRama nombre="Aprendizaje Colaborativo" :icono="users"/>
        <IconoRama nombre="Atención a la diversidad" :icono="universalAccess"/>
        <IconoRama nombre="Enseñanza en valores" :icono="handHoldingHeart"/>
      </FilaIconos>
    </SeccionTransparente>
    <SeccionOpaca>
      <FilaContenido>
        <ColumnaContenido>
          <ImagenDetalle src="/img/ciclos/eso/coches.jpg" alt="Proyectos"/>
        </ColumnaContenido>
        <ColumnaContenido>
          <TextoDetalle titulo="Nos gustan los proyectos">
            <p>El aprendizaje basado en proyectos y retos es motivante, presenta resultados inmediatamente aplicables en
              el mundo real y facilita un aprendizaje autónomo y colaborativo</p>
            <p>Buscamos un aprendizaje significativo, que tenga en cuenta la diversidad de nuestro alumnado y la
              realidad del entorno en el que se encuentran. Por ello los proyectos nos encantan, porque apuntalan
              nuestro método educativo</p>
          </TextoDetalle>
        </ColumnaContenido>
      </FilaContenido>
      <FilaContenido>
        <ColumnaContenido>
          <TextoDetalle titulo="Usamos la tecnología en apoyo de nuestro método educativo">
            <p>
              Somos un centro de excelencia TIC, reconocido con nivel 5 (el máximo). Tenemos una larga tradición de uso
              de la tecnología en el aula para favorecer el conocimiento.
            </p>
            <p>
              Actualmente mantenemos una estrategia 1 a 1 (un dispositivo por alumno) que en secundaria se basa en que
              cada alumno dispone de un <strong>Chromebook</strong>, portátil en el que los contenidos son
              exclusivamente educativos.
            </p>
            <p>Usamos la tecnología en pro de aplicar métodos activos de enseñanza. La tecnología facilita la
              participación de los alumnos en proyectos motivantes impulsados por las últimas tecnologías.</p>
          </TextoDetalle>
        </ColumnaContenido>
        <ColumnaContenido>
          <ImagenDetalle src="/img/ciclos/eso/croma.jpg" alt="Proyecto con Chroma"/>
        </ColumnaContenido>
      </FilaContenido>
      <FilaContenido>
        <ColumnaContenido>
          <ImagenDetalle src="/img/ciclos/eso/valores.jpg" alt="Día de la mujer" />
        </ColumnaContenido>
        <ColumnaContenido>
          <TextoDetalle titulo="Educando en valores">
            <p>Siempre miramos mas allá de los contenidos académicos. Trabajamos valores en nuestros alumnos, nos implicamos en nuestro entorno, somos sensibles a los problemas que nos rodean y realizamos acciones y proyectos para reflexionar y mejorar nuestra realidad. </p>
            <p>Nuestro centro se inspira en los valores salesianos que fomentan un método preventivo de educación. La
              educación en valores es la base de nuestro trabajo para conseguir personas cuyos valores sean
              inspiradores.</p>
            <p>Trabajamos en conjunto con las familias para conseguir un apoyo educativo constante y un mejor
              acompañamiento de nuestro alumnado</p>
          </TextoDetalle>
        </ColumnaContenido>
      </FilaContenido>
    </SeccionOpaca>

    <SeccionOpaca colorFondo="#999999">
      <ContenedorFotos :fotos="fotos" />
    </SeccionOpaca>
  </main>
</template>



<script>
//componentes
import SeccionOpaca from "@/components/secciones/SeccionOpaca";
import TituloGrande from "@/components/secciones/TituloGrande";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/TextoDetalle";
import ImagenDetalle from "@/components/items/ImagenDetalle";
import SeccionTransparente from "@/components/secciones/SeccionTransparente";
import FilaIconos from "@/components/wrappers/FilaIconos";
import IconoRama from "@/components/items/IconoRama";
import ContenedorListaAspectos from "@/components/wrappers/ContenedorListaAspectos";
import Lista from "@/components/wrappers/Lista";
import ContenedorFotos from "@/components/wrappers/ContenedorFotos";

//datos
import {university, universalAccess, chalkboardTeacher, users, handHoldingHeart} from "~/assets/svg/iconos";
import {fotos} from "~/assets/data/estudios/eso.js";

export default {
  name: "eso",
  data() {
    return {
      university: university,
      universalAccess: universalAccess,
      chalkboardTeacher: chalkboardTeacher,
      users: users,
      handHoldingHeart: handHoldingHeart,
      fotos:fotos
    }
  },
  head() {
    return {
      title: "Educación Secundaria Obligatoria (ESO), Salesianos Centro Don Bosco de Villamuriel de Cerrato"
    }
  },
  components: {
    ContenedorFotos,
    Lista,
    ContenedorListaAspectos,
    IconoRama,
    FilaIconos,
    SeccionTransparente,
    ImagenDetalle, TextoDetalle, ColumnaContenido, FilaContenido, TituloGrande, SeccionOpaca
  }
}
</script>
<style lang="scss" scoped>
main{
  background-image:url("/img/ciclos/fondo-eso.jpg");
}
</style>
