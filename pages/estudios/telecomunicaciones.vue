<template>
  <main>
    <TituloEstudios imagen="/img/ciclos/fondo-teleco.jpg" titulo="Instalaciones de Telecomunicaciones" subtitulo="FP de Grado Medio" />
    <SeccionOpaca>
      <FilaContenido>
        <ColumnaContenido>
          <ImagenDetalle src="/img/ciclos/teleco01.jpg" alt="Telecomunicaciones" />
        </ColumnaContenido>
        <ColumnaContenido>
          <TextoDetalle titulo="¿Por qué estudiar este ciclo?">
            <p>Los estudios de telecomunicaciones permiten formarse en un área de alta demanda laboral. Se trata de una formación para personal muy polifacético capaz de cubrir las necesidades de un gran número de puestos de trabajo relacionados con la tecnología.</p>

            <p>El ciclo permite conseguir las capacidades y habilidades que se requieren a un técnico en instalaciones de telecomunicaciones.</p>

            <p>En los dos años de duración del ciclo aprenderás lo relativo a:</p>

          </TextoDetalle>
        </ColumnaContenido>
      </FilaContenido>
    </SeccionOpaca>
    <SeccionTransparente titulo="RAMAS PROFESIONALES">
      <FilaIconos>
        <IconoRama nombre="Sistemas y Equipos Informáticos" :icono="laptopCode" />
        <IconoRama nombre="Domótica" :icono="houseDamage" />
        <IconoRama nombre="Sistemas de audio y vídeo" :icono="headphonesAlt" />
        <IconoRama nombre="Infraestructuras de telecomunicaciones" :icono="satelliteDish" />
      </FilaIconos>
    </SeccionTransparente>


    <SeccionOpaca titulo="ASPECTOS DESTACABLES">
      <FilaContenido>
        <ColumnaContenido>
          <ContenedorListaAspectos titulo="Requisitos de acceso" :entrada="true">
            <p>Hay que cumplir uno de estos requisitos</p>
            <Lista :contenidos="datos.requisitos" />
          </ContenedorListaAspectos>
        </ColumnaContenido>
        <ColumnaContenido>
          <ContenedorListaAspectos titulo="Salidas Académicas" :salida="true">
            <Lista :contenidos="datos.academicas" />
          </ContenedorListaAspectos>
        </ColumnaContenido>
        <ColumnaContenido>
          <ContenedorListaAspectos titulo="Salidas Profesionales" :salida="true">
            <Lista :contenidos="datos.profesionales" />
          </ContenedorListaAspectos>
        </ColumnaContenido>
      </FilaContenido>
    </SeccionOpaca>

    <SeccionOpaca colorFondo="#999999">
      <ContenedorFotos :fotos="datos.fotos" />
    </SeccionOpaca>

    <SeccionOpaca titulo="MÓDULOS DEL CICLO">
      <FilaContenido>
        <ColumnaContenido titulo="Primer Curso">
          <Lista :contenidos="datos.modulosPrimero"  />
        </ColumnaContenido>
        <ColumnaContenido titulo="Segundo Curso">
          <Lista :contenidos="datos.modulosSegundo" />
        </ColumnaContenido>
      </FilaContenido>
    </SeccionOpaca>
  </main>
</template>

<script>

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
import {laptopCode, houseDamage, networkWired,headphonesAlt,satelliteDish} from "~/assets/svg/iconos";
import * as datosTeleco from "~/assets/data/estudios/telecomunicaciones";
import ContenedorFotos from "../../components/wrappers/ContenedorFotos";

export default {
  name: "telecomunicaciones",
  data(){
    return{
      laptopCode:laptopCode,
      houseDamage:houseDamage,
      networkWired:networkWired,
      headphonesAlt:headphonesAlt,
      satelliteDish:satelliteDish,
      datos:datosTeleco
    }
  },
  head(){
    return{
        title:"Ciclo de FPO de Grado medio en Telecomunicaciones, Salesianos Centro Don Bosco de Villamuriel de Cerrato"
    }
  },
  components: {
    ContenedorFotos,
    Lista,
    ContenedorListaAspectos,
    IconoRama,
    FilaIconos,
    SeccionTransparente,
    ImagenDetalle, TextoDetalle, ColumnaContenido, FilaContenido, TituloEstudios, SeccionOpaca}
}
</script>
