<template>
  <PaginaNoticia titulo="AMBIENTE SEGURO" subtitulo="En nuestro centro garantizamos la defensa de los derechos y la protección de los menores" imagen="/img/fondos/classroom2.png">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>La Casa de Salesianos P. Aramburu, pertenece a la Inspectoría Salesiana <em>“Santiago el Mayor”</em> (<a
            href="https://www.salesianos.es">www.salesianos.es</a>), de la Congregación Salesiana. Forma parte de un conjunto de obras educativas, extendidas por las Comunidades Autónomas de Galicia, Asturias, Cantabria, País Vasco, La Rioja, Navarra, Castilla y León, Madrid y Castilla la Mancha.</p>
          <p>La mayor parte de los destinatarios de nuestra Casas son niños y niñas y adolescentes, todos ellos menores de edad. El sistema salesiano desde el que les educamos es el denominado Sistema Preventivo de Don Bosco. Este Sistema lo desarrollamos mediante:</p>
          <ul>
          <li>La presencia de cada educador a cada educando, desde la cercanía, el conocimiento y el respeto.</li>
            <li>La oferta de un ambiente educativo amplio, rico de propuestas, que se configura como un entorno seguro
              para el menor.
            </li>
          </ul>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle src="/img/escuela/logo-ambiente-seguro.png" alt="Ambiente Seguro" />
      </ColumnaContenido>
    </FilaContenido>
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Nuestra política es, desde nuestro propio carisma educativo, la de protección y cuidado de los menores.
            Todos los educadores, salesianos o seglares, de nuestra Casa están llamados a desarrollar este sistema para
            la promoción integral de los niños y jóvenes que las familias nos han confiado.</p>
          <p>Desde este espíritu preventivo, ofrecemos el Código de Conducta, como norma reguladora de las posibles
            infracciones a nuestra política de protección y de creación de entornos seguros para los menores atendidos
            en nuestra Casa.</p>

          <p>Partiendo de los principios y valores que guían nuestra misión como educadores, nos adherimos con firmeza
            a la política institucional promulgada en defensa de los derechos de los menores y nos proponemos reforzar
            la labor de protección a los mismos que siempre hemos desarrollado. Nuestro centro, recoge en el Manual de
            Protección al Menor, de forma sencilla, ordenada y sistemática, las acciones preventivas que hay que
            realizar siendo eficaces en la forma de actuar con los menores.</p>
          <p>Es un documento que requiere una constante puesta al día, pues los protocolos en las distintas comunidades
            autonómicas se van actualizando y surgen situaciones con menores en la que es necesario poner criterios de
            actuación. Si hay o ha habido maltrato o abuso, o has sido testigo de que un menor ha sido maltratado o
            abusado, debes informar:</p>
          <ul>
            <li>A tus padres.</li>
            <li>Informando a la Dirección del Colegio o a los profesores.</li>
            <li>Dirigirte al Equipo de Protección del Menor del Colegio.</li>
          </ul>
          <EnlaceBoton url="https://drive.google.com/file/d/1clRpAK4VIajC_YlwPGXGK---O3rcxkqd/view?usp=share_link" :blank="true" texto="Descargar el documento con el código de conducta para un Ambiente Seguro"/>
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
import ImagenDetalle from "@/components/items/ImagenDetalle.vue";
import EnlaceBoton from "@/components/items/EnlaceBoton.vue";

export default {
  components: {ImagenDetalle, PaginaNoticia,FilaContenido,ColumnaContenido,TextoDetalle,EnlaceBoton}
}
</script>

<style scoped>

</style>
