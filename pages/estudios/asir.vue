<template>
  <main>
    <TituloEstudios titulo="Administración de Sistemas Informáticos en Red" subtitulo="FP de Grado Superior" />
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
    <SeccionTransparente titulo="RAMAS PROFESIONALES">
      <FilaIconos>
        <IconoRama nombre="Administración de Sistemas" :icono="server" />
        <IconoRama nombre="Gestión y Administración de Bases de Datos" :icono="database" />
        <IconoRama nombre="Gestión y Administración de Redes" :icono="networkWired" />
        <IconoRama nombre="Seguridad de Sistemas y Redes" :icono="lock" />
        <IconoRama nombre="Desarrollo e Implementación de Aplicaciones Web" :icono="globe" />
      </FilaIconos>
    </SeccionTransparente>

    <SeccionOpaca titulo="ASPECTOS DESTACABLES">
      <FilaContenido>
        <ColumnaContenido>
          <ContenedorListaAspectos titulo="Requisitos de acceso" :entrada="true">
            <p>Hay que cumplir uno de estos requisitos</p>
            <Lista :contenidos="datosAsir.requisitos" />
          </ContenedorListaAspectos>
        </ColumnaContenido>
        <ColumnaContenido>
          <ContenedorListaAspectos titulo="Salidas Académicas" :salida="true">
            <p>Hay que cumplir uno de estos requisitos</p>
            <Lista :contenidos="datosAsir.academicas" />
          </ContenedorListaAspectos>
        </ColumnaContenido>
        <ColumnaContenido>
          <ContenedorListaAspectos titulo="Salidas Profesionales" :salida="true">
            <Lista :contenidos="datosAsir.profesionales" />
          </ContenedorListaAspectos>
        </ColumnaContenido>
      </FilaContenido>
    </SeccionOpaca>

    <SeccionOpaca colorFondo="#999999">

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
import ImagenDetalle from "@/components/items/ImagenDetalle";
import SeccionTransparente from "@/components/secciones/SeccionTransparente";
import FilaIconos from "@/components/wrappers/FilaIconos";
import IconoRama from "@/components/items/IconoRama";
import ContenedorListaAspectos from "@/components/wrappers/ContenedorListaAspectos";
import Lista from "@/components/wrappers/Lista";

//datos
import {server, database, networkWired,lock,globe} from "~/assets/svg/iconos";
import * as datosAsir from "~/assets/data/estudios/asir";

export default {
  name: "asir",
  data(){
    return{
      server:server,
      database:database,
      networkWired:networkWired,
      lock:lock,
      globe:globe,
      datosAsir:datosAsir
    }
  },
  head(){
    return{
        title:"Administración de Sistemas Informáticos en Red (ASIR), Salesianos Centro Don Bosco de Villamuriel de Cerrato"
    }
  },
  components: {
    Lista,
    ContenedorListaAspectos,
    IconoRama,
    FilaIconos,
    SeccionTransparente,
    ImagenDetalle, TextoDetalle, ColumnaContenido, FilaContenido, TituloEstudios, SeccionOpaca},
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

<style lang="scss" scoped>



</style>
