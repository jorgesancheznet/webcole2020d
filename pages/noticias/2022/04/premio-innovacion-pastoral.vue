<template>
  <PaginaNoticia titulo="Premio para nuestra «Operación Navidad»"
                 imagen="/img/textura1.jpg" subtitulo="XV Premio a la Innovación y Experimentación en Pastoral">
    <FilaContenido>
      <ImagenDetalle src="/img/noticias/2022/04/premio-innovacion.jpg" alt="Premio a la innovacion" ancho-max="600px"  />
    </FilaContenido>
    <FilaContenido>

      <TextoDetalle anchoMax="800px">
        <p class="fuenteMed">El día 22 de abril se ha hecho pública la resolución del <strong>XV Premio a la Innovación y Experimentación en Pastoral</strong>, convocado por <a href="https://www.eccastillayleon.org" target="_blank">Escuelas Católicas Castilla y León</a>, y patrocinado por la <a href="https://www.fundacionedelvives.org/es/index" target="_blank">Fundación Edelvives</a>.</p>

        <p class="fuenteMed">Se trata de un reconocimiento que nos llena de  orgullo por la labor realizada y de agradecimiento al jurado del premio y que nos da un fuerte impulso motivador para todas las actividades, proyectos y campañas futuras que realicemos.</p>

        <p class="fuenteMed">Exponemos la comunicación que se nos ha transmitido desde la organización: </p>
        <blockquote class="fuenteMed">El Jurado presidido por D. Leandro Roldán, secretario autonómico de Escuelas Católicas de Castilla y León, e integrado por:</blockquote>
        <ul class="cita fuenteMed">
          <li><strong>Dª Leticia Carranza</strong>, coordinadora de Instituciones de la <strong>Fundación
            Edelvives</strong></li>
          <li><strong>Dª Dolors García</strong>, directora del Departamento Pastoral de <strong>Escuelas Católicas
            Nacional</strong></li>
          <li><strong>D. Juan Carlos López</strong>, delegado diocesano de enseñanza de la <strong>diócesis de
            Zamora</strong></li>
          <li><strong>Dª Ana María Gómez</strong>, coordinadora de Pastoral del colegio Virgen Blanca de León y adjunta al área
            pedagógica pastoral de la <strong>Fundación Educere</strong>
          </li>
          <li><strong>Secretario del Jurado</strong>, <strong>Eugenio Rey</strong>, responsable del departamento de
            <strong>Pastoral Educativa de Escuelas
              Católicas Castilla y León</strong></li>
        </ul>
        <blockquote class="fuenteMed">ha fallado de este modo el XV Premio de Innovación y Experimentación en Pastoral:</blockquote>
        <ul class="cita fuenteMed">
          <li><strong>Primer premio</strong>, dotado con 1.500 €<br>
            «Operación Navidad»<br>
            <strong>Centro Don Bosco de Villamuriel de Cerrato</strong>
          </li>

          <li><strong>Segundo premio</strong>, dotado con 800 €<br>
            «El camino deja huella»<br>
            <strong>Colegio Discípulas de Jesús de León</strong>
          </li>

          <li><strong>Tercer premio</strong>, dotado con 500 €:<br>
            «Oración curricular»<br>
            <strong>Colegio Paula Montal de Astorga</strong>
          </li>

          <li><strong>Finalistas</strong>:<br>
            «Adivina el personaje» <br><strong>Colegio Lestonnac de Valladolid</strong><br><br>
            «Pastorapps. Una pastoral por proyectos»<br><strong>Colegio La Inmaculada de Ponferrada</strong>
          </li>
        </ul>

        <blockquote class="fuenteMed">Las tres experiencias premiadas se expondrán en el transcurso de la XVIII Jornada Autonómica de
          Pastoral, que se celebrará en el primer cuatrimestre del curso 2022-2023. Tanto los trabajos ganadores como
          los finalistas formarán parte de la edición web y se subirán a la web de Escuelas Católicas Castilla y León.
        </blockquote>

        <blockquote>La entrega de los premios se hará en los respectivos centros, entre mayo y junio, con la asistencia
          del Secretario Autonómico, el responsable del Departamento de Pastoral, y una persona de la Fundación
          Edelvives.
        </blockquote>
      </TextoDetalle>
    </FilaContenido>
  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";
import ImagenDetalle from "@/components/items/ImagenDetalle";

export default {
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle, ImagenDetalle},
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/constantes.scss";
@import "~assets/estilos/mixins.scss";


</style>
