<template>
  <main>
    <TituloEstudios titulo="Administración de Sistemas Informáticos en Red"
                    subtitulo="FP de Grado Superior" />
    <SeccionOpaca>
      <FilaContenido>
        <ColumnaContenido>
          <ImagenDetalle src="/img/ciclos/asir01.jpg" alt="ASIR" />
        </ColumnaContenido>
        <ColumnaContenido>
          <TextoDetalle titulo="¿Por qué estudiar este ciclo?">
            <p>La alta demanda de profesionales en las tecnologías relacionadas con la gestión de computadoras, redes, bases de datos y sistemas operativos, así como el desarrollo y administración de aplicaciones de todo tipo, hace de estos estudios, unos de los más solicitados a nivel laboral.</p>

            <p>El ciclo permite conseguir las capacidades y habilidades que se requieren a un técnico superior en administración de sistemas, redes y tecnologías relacionadas con Internet</p>

            <p>Se recorren, durante los dos años de duración del ciclo, el funcionamiento de las redes, tanto locales como de área global (especialmente Internet), el diseño, manejo y administración de sistemas de bases de datos, la administración de sistemas operativos de servidor, virtualización de sistemas, desarrollo e implementación de aplicaciones web, seguridad de sistemas, gestión y administración de servicios de red, etc.</p>

          </TextoDetalle>
        </ColumnaContenido>
      </FilaContenido>
    </SeccionOpaca>
  </main>
</template>

<script>

//librerías
import {mapMutations} from "vuex";
//componentes
import SeccionOpaca from "@/components/secciones/SeccionOpaca";
import TituloEstudios from "@/components/secciones/TituloEstudios";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/TextoDetalle";
import ImagenDetalle from "@/components/ImagenDetalle";

export default {
  name: "asir",
  components: {ImagenDetalle, TextoDetalle, ColumnaContenido, FilaContenido, TituloEstudios, SeccionOpaca},
  computed: {
    fondo() {
      return this.$store.state.fondo
    }
  },
  methods:{
    ...mapMutations([
      "cambiarFondo"
    ])
  },
  mounted(){
    this.cambiarFondo("/img/ciclos/fondo-asir.jpg");
  }
}
</script>

<style lamg="scss" scoped>



</style>
