<template>
  <PaginaNoticia titulo="Misión, Visión y Valores" imagen="/img/textura1.jpg">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle titulo="MISIÓN" :fuenteMin="true">
          <p>Nuestro centro tiene como misión la formación integral de los jóvenes, fundamentalmente a través de la Formación Profesional, haciendo posible la consecución de sus metas personales y la inserción laboral.</p>
            <p>Fieles a nuestro original estilo educativo salesiano, que denominamos “sistema preventivo”, cuidamos nuestras relaciones personales en un clima de familiaridad y confianza, de modo que son las personas el centro de nuestra acción educativa.</p>
            <p>Las relaciones humanas, la cualificación técnica, la inserción laboral, la mentalidad crítica y la visión cristiana de la realidad conforman la identidad de Salesianos Padre Aramburu.</p>
          <p>Nuestra Campaña no quiere evadirse de esta situación, sino que busca aprovecharla como una oportunidad para
            educar nuestra mirada y nuestro corazón ante el nuevo tiempo que está naciendo.</p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Misión" src="/img/pastoral/n-mision.png" ancho-max="300px"/>
      </ColumnaContenido>
    </FilaContenido>
    <FilaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Visión" src="/img/pastoral/n-vision.png" ancho-max="300px" />
      </ColumnaContenido>
      <ColumnaContenido>
        <TextoDetalle titulo="VISIÓN" :fuente-min="true">
          <p>Salesianos Padre Aramburu quiere ser reconocido como un centro de referencia en la formación de los jóvenes burgaleses. Para nosotros una formación de calidad tiene como componentes la propuesta de los mejores valores humanos inspirados por el evangelio, la implicación y la participación activa en la sociedad y la calidad en la cualificación técnica.</p>
          <p>Para conseguir esto, tenemos necesidad de promover alianzas estratégicas con el sector industrial y las empresas que cultivan el factor I+D+i en nuestro entorno.</p>
          <p>Queremos que la marca “salesianos” sea puesta en valor en la sociedad, sobre todo, a través de las personas que se incorporan desde nuestra escuela a la sociedad y al mundo laboral.</p>
          <p>La gestión por procesos de mejora continua debe asegurar nuestro éxito, desde la implicación creciente de toda la comunidad educativa.</p>
        </TextoDetalle>
      </ColumnaContenido>
    </FilaContenido>
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle titulo="VALORES" :fuente-min="true">
          <p><strong>ACOGIDA</strong> La entendemos como capacidad para mirar con simpatía a cada joven y acogerlo en la situación concreta en la que se encuentre. La relación cercana y el acompañamiento educativo hacen que se robustezca la autoestima y el desarrollo de todas las capacidades que atesora cada persona.</p>
          <p><strong>PARTICIPACIÓN</strong> Nuestra escuela genera personas proactivas con la sociedad. Esta actitud la favorecemos mediante un sistema de implicación creciente en las actividades y vida del Centro, dependiendo del interés y capacidad de cada joven. Dar a los demás a cambio de la propia satisfacción por el trabajo realizado es una vía de desarrollo personal y vocacional.</p>
          <p><strong>JUSTICIA</strong> En nuestra escuela cristiana la Justicia es sinónimo de Evangelio. Entendemos la Justicia no como término exclusivamente jurídico: dar a cada uno lo que le corresponde; sino como revulsivo que lleva a mirar las dinámicas sociales desde el punto de vista del “menor”, del “empobrecido”, “de la víctima “, “del que goza de menos oportunidades”. Entrenamos este concepto de justicia desde la participación ciudadana y el voluntariado social.</p>
          <p><strong>OPCIÓN</strong> POR LOS MÁS NECESITADOS Según nuestro fundador, San Juan Bosco, la opción preferencial de la escuela salesiana son los jóvenes “más pobres y en peligro”. Esta actitud nos lleva a no discriminar a nadie por su situación de desventaja social o educativa. Antes bien, estos chicos se convierten en el centro de nuestra atención, a través de programas de formación específicos desde la enseñanza reglada y los cursos de formación ocupacional.</p>
          <p><strong>RESPONSABILIDAD</strong> Entendemos por responsabilidad el ejercicio de las tareas que a cada uno nos corresponden. Como profesores-educadores estimulamos en nuestros jóvenes el sentido del deber y el gusto por el trabajo bien hecho. La responsabilidad nos lleva también a educar al joven para una vida honesta, en el desempeño de su labor profesional y en su vida personal y familiar.</p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle titulo="valores" src="/img/pastoral/n-valores.png" ancho-max="300px" />
      </ColumnaContenido>
    </FilaContenido>

  </PaginaNoticia>
</template>

<script>
import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import TextoDetalle from "@/components/TextoDetalle";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";

export default {
  components: {PaginaNoticia,FilaContenido,TextoDetalle,ColumnaContenido},
}
</script>

<style scoped>

</style>
