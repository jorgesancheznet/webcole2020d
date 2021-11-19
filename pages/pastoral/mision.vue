<template>
  <PaginaNoticia titulo="Misión, Visión y Valores" imagen="/img/textura1.jpg">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle titulo="NUESTRA MISIÓN" :fuenteMin="true">
          <p>Somos una Escuela Salesiana que mira al futuro con la responsabilidad de continuar el patrimonio pedagógico y carismático de Don Bosco y con la esperanza de dar una adecuada respuestas a niños y jóvenes de hoy.</p>
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
        <TextoDetalle titulo="NUESTRA VISIÓN" :fuente-min="true">
          <p>Pretendemos ser una escuela inclusiva que acoge a todos y cada uno de nuestros alumnos, con un talante basado en la cercanía y en la creación de un ambiente educativo rico en valores evangélicos al estilo del Sistema Preventivo de Don Bosco.</p>
          <p>Buscamos una educación integral que ayuda a crecer como persona y como cristiano soñando un mundo mejor.</p>
          <p>Favorecemos una escuela a tiempo completo: tiempo libre educativo y conciliación familiar.</p>
          <p>Apostamos por la innovación pedagógica: las nuevas metodologías, el plurilingüismo y las tecnologías como instrumentos pedagógicos.</p>
          <p>Avalamos el protagonismo del alumnado en el proceso de enseñanza-aprendizaje, y aspiramos desde el sentido crítico a la construcción de un mundo mejor.</p>
        </TextoDetalle>
      </ColumnaContenido>
    </FilaContenido>
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle titulo="NUESTROS VALORES" :fuente-min="true">
          <p>Somos educadores comprometidos con el dersarrollo de los valores propios de nuestro patrimonio educativo.</p>
          <ul>
            <li>Acogida incondicional a la persona.</li>
            <li>Confianza en los jóvenes.</li>
            <li>Atención preferencial a los más necesitados.</li>
            <li>Respeto a la vida.</li>
            <li>Esfuerzo como instrumento de crecimiento.</li>
            <li>Construcción de un mundo más solidario justo y pacífico.</li>
            <li>Apertura a Dios.</li>
          </ul>
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
import TextoDetalle from "@/components/wrappers/TextoDetalle";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";

export default {
  components: {PaginaNoticia,FilaContenido,TextoDetalle,ColumnaContenido},
}
</script>

<style scoped>

</style>
