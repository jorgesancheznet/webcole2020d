<template>
  <PaginaNoticia titulo="XXXIX Peregrinación de Palencia a Villamuriel"
                 imagen="/img/textura1.jpg" subtitulo="1 de mayo de 2022">
    <FilaContenido>
      <TextoDetalle :fuente-min="true">
        <p>Después de estos dos años de pandemia retomamos con mucho
          cariño el Homenaje a María Auxiliadora el sábado 30 de abril y la
          <strong>XXXIX Fiesta-peregrinación</strong> el 1 de mayo</p>
        <p>Lo hemos preparado con mucho cariño, para que sea un encuentro
          celebrativo, festivo, de convivencia y de acción de gracia} entre
          todos y todas los que formamos esta gran familia en<strong> Villamuriel de
            Cerrato</strong>, <strong>Palencia</strong>, <strong>Astudillo</strong> y <strong>Herrera de Pisuerga</strong>.</p>
        <p>Invitamos a participar a todas y todos amigos y amigas, familias, profesores, educadores, animadores, familia salesiana de la provincia de Palencia y de otros lugares de la geografía española, ili os queremos
          acoger para que os sintáis en casa!!!. El lema pastoral de este curso es "Apasionados por la Vida". Este vivir <em>"apasionados por la vida"</em> se llama <strong>ENCUENTRO</strong>, es decir: <strong>comunidad</strong>, <strong>fraternidad</strong>, <strong>amistad</strong></p>
      </TextoDetalle>
      <ImagenDetalle src="/img/noticias/2022/04/cartel-1-mayo.jpeg" alt="Cartel 1 de mayo" ancho-min="400px"/>
    </FilaContenido>
    <FilaContenido>
      <TextoDetalle>
        <table>
          <tr>
            <th colspan="2">SÁBADO 30 de abril</th>
          </tr>
          <tr>
            <th>21:00</th>
            <td>Inicio de la acampada infantil y juvenil</td>
          </tr>
          <tr>
            <th>22:00</th>
            <td>Vigilia Mariana con procesión, si el tiempo lo permite</td>
          </tr>
          <tr>
            <th>23:00</th>
            <td>Gran Chocolatada Popular</td>
          </tr>
          <tr>
            <th>23:40</th>
            <td>Actividad nocturna para niños y jóvenes</td>
          </tr>
          <tr>
            <th colspan="2">DOMINGO 1 de mayo</th>
          </tr>
          <tr>
            <th>08:30</th>
            <td>Despertarse para los acampados</td>
          </tr>
          <tr>
            <th>09:00</th>
            <td>Buenos días especiales</td>
          </tr>
          <tr>
            <th>11:00</th>
            <td>Salida desde la Fuente de la Salud (Palencia)</td>
          </tr>
          <tr>
            <th>12:30</th>
            <td>Eucaristía Campestre en el Centro Don Bosco<br>
              <em>Si el tiempo no acampaña, se celebrará en el Pabellón Provincial Adolfo Nicolás de Villamuriel de Cerrato</em>
            </td>
          </tr>
          <tr>
            <th>13:30</th>
            <td>Sesión Vermut</td>
          </tr>
          <tr>
            <th>14:00</th>
            <td>Comida campestre - Pinchos solidarios <br>
              <em>También cada persona puede traer su comida</em>
            </td>
          </tr>
          <tr>
            <th>15:30</th>
            <td>Sobremesa con juegos, discomóvil y grandes sorpresas</td>
          </tr>
          <tr>
            <th>17:30</th>
            <td>Canto de La Salve, bendición solemne y despedida</td>
          </tr>

        </table>
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
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle, ImagenDetalle}
}
</script>

<style scoped lang="scss">
@import "~assets/estilos/mixins";
.textoDetalle{
  table{
    th:first-of-type{
      background-color: $colorNaranja;
    }
    th[colspan="2"]:first-of-type{
      background-color:$colorGrisSalesiano;
      color:white;
    }
  }
}
td,th{
  border:1px solid black;
}
</style>
