<template>
  <PaginaNoticia titulo="Apasionados por la vida" subtitulo="Lema del curso 2021-22" imagen="/img/textura1.jpg">

    <FilaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Encuentro, apasionados por la vida" src="/img/pastoral/encuentro.jpg" ancho-max="300px"/>
        <TextoDetalle>
          <p><strong>APASIONADOS POR LA VIDA</strong> es el lema de nuestro curso 2021-22</p>
          <p>Este vivir <strong><em>apasionados por la vida</em></strong> se llama <strong>ENCUENTRO</strong>,  es decir: familia, comunidad, fraternidad, amistad…</p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Cuidado, apasionados por la vida" src="/img/pastoral/cuidado.jpg" ancho-max="300px"/>
        <TextoDetalle>
          <p>Esta actitud se traduce en <strong>CUIDADO</strong> de las personas, de la vida, de sus opciones específicas y vocacionales. Por eso se nos invita a “arriesgar la vida”, quien no arriesga es un perdedor, “a cuidar la vida” del planeta, de la familia, del propio corazón…, porque Dios piensa en nosotros,
            <strong><em>“apasionados por la vida”</em></strong>, como bálsamo para este mundo herido por tantas contradicciones y desencuentros.</p>
        </TextoDetalle>
      </ColumnaContenido>
    </FilaContenido>

    <FilaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Esperanza, apasionados por la vida" src="/img/pastoral/esperanza.jpg" ancho-max="300px"/>
        <TextoDetalle>
          <p>De la mano de la esperanza, caminamos adivinando el futuro en cada huella. La vida es el origen de la vida. Eso es lo que descubren, todos los días y en todas las circunstancias, los
            <strong><em>“apasionados por la vida”</em></strong>. Es hora de construir puentes, de reactivar patios, de recuperar la sonrisa oculta tras infinidad de “mascarillas”, porque estamos llamados a llenar la vida de Vida</p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle ancho-max="500px" alt="Apasionados por la vida" src="/img/pastoral/apasionados.png" />
        <TextoDetalle>
          <p>He aquí la historia del presente curso. Vacunados contra la nostalgia y contra el pesimismo, alcanzaremos la inmunidad de grupo contra todo lo que no sea vida.
          <strong><em>“Apasionados por la vida”</em></strong>, la vida es nuestra opción, nuestra tarea, nuestra determinación, nuestro <strong>reto:
          vívela, siéntela, ama, ríe, llora, juega, gana, pierde, tropieza, pero sobre todo, levántate siempre,… y
              sigue</strong>. ¡Vive la vida!</p>
        </TextoDetalle>
      </ColumnaContenido>
    </FilaContenido>

  </PaginaNoticia>
</template>

<script>
import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";

export default {
  components: {PaginaNoticia,FilaContenido,TextoDetalle,ColumnaContenido},
}
</script>

<style scoped>

</style>
