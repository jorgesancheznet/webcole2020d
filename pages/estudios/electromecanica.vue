<template>
  <main>
    <TituloGrande imagen="/img/ciclos/fondo-electromecanica.jpg" titulo="Electromecánica de Vehículos" subtitulo="FP de Grado Superior" />
    <SeccionOpaca>
      <FilaContenido>
        <ColumnaContenido>
          <ImagenDetalle src="/img/ciclos/electromecanica01.jpg" alt="Carrocería" />
        </ColumnaContenido>
        <ColumnaContenido>
          <TextoDetalle titulo="¿Por qué estudiar este ciclo?">
            <p>
              Estos estudios te permitirán desarrollar una carrera como especialista en el mantenimiento de vehículos.
            </p>
            <p>
              Se trata de un área muy práctica con alta demanda que te permitirá adquirir las destrezas y técnicas que permitan localizar y arreglar averías mecánicas, hidraúlicas, eléctricas y electrónicas.
            </p>
            <p>Obtendrás las capacidades necesarias para la puesta a punto de todos los sistemas de los vehículos: motor, sistema eléctrico y electrónico, suspensión, dirección, frenos, etc.</p>
          </TextoDetalle>
        </ColumnaContenido>
      </FilaContenido>
    </SeccionOpaca>

    <SeccionTransparente titulo="RAMAS PROFESIONALES">
      <FilaIconos>
        <IconoRama nombre="Reparación de Vehículos" :icono="carCrash" />
        <IconoRama nombre="Electricidad" :icono="bolt" />
        <IconoRama nombre="Mecánica" :icono="cogs" />
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
import TituloGrande from "@/components/secciones/TituloGrande";
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
import {carCrash,cogs, bolt} from "~/assets/svg/iconos";
import * as datosElectromecanica from "~/assets/data/estudios/electromecanica";
import ContenedorFotos from "../../components/wrappers/ContenedorFotos";

export default {
  name: "electromecanica",
  data(){
    return{
      carCrash:carCrash,
      cogs:cogs,
      bolt:bolt,
      datos:datosElectromecanica
    }
  },
  head(){
    return{
        title:"Formación Profesional en Carrocería, Salesianos Centro Don Bosco de Villamuriel de Cerrato"
    }
  },
  components: {
    ContenedorFotos,
    Lista,
    ContenedorListaAspectos,
    IconoRama,
    FilaIconos,
    SeccionTransparente,
    ImagenDetalle, TextoDetalle, ColumnaContenido, FilaContenido, TituloGrande, SeccionOpaca}
}
</script>
<style lang="scss" scoped>
main{
  background-image:url("/img/ciclos/fondo-electromecanica.jpg");
}
</style>
