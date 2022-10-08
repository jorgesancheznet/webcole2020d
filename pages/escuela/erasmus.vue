<template>
  <main>

    <TituloGrande titulo="Servicio Erasmus+" subtitulo="Fomento de la educación en Europa"
                  imagen="/img/escuela/europa.jpg"/>
    <SeccionOpaca>
      <FilaContenido>
        <ColumnaContenido>
          <TextoDetalle titulo="¿Qué es Erasmus+?">
            <p>El <a href="http://sepie.es/" target="_blank">Servicio Español para la Internacionalización de la Educación</a> nos concede para este curso el programa
              <a href="https://ec.europa.eu/programmes/erasmus-plus/node_es/" target="_blank">ErasmusPlus</a>, el programa de la Unión Europea para apoyar la educación, la formación, la juventud y el
              deporte en Europa.</p>
          </TextoDetalle>
        </ColumnaContenido>
        <ColumnaContenido>
          <ImagenDetalle alt="Erasmus plus" src="/img/escuela/Erasmus_SEPIe.jpeg"/>
        </ColumnaContenido>
      </FilaContenido>
    </SeccionOpaca>
  </main>
</template>

<script>
import SeccionOpaca from "@/components/secciones/SeccionOpaca";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/wrappers/TextoDetalle";
import ImagenDetalle from "@/components/items/ImagenDetalle";
import TituloGrande from "@/components/secciones/TituloGrande";
export default {
  name: "erasmus",
  components:{SeccionOpaca,FilaContenido,ColumnaContenido,TextoDetalle,ImagenDetalle,TituloGrande}
}
</script>

<style scoped>

</style>
