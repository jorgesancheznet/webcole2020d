<template>
  <main>
    <TituloGrande imagen="/img/ciclos/fondo-carroceria.jpg" titulo="Formación Profesional en Carrocería" subtitulo="FP de Grado Superior" />
    <SeccionOpaca>
      <FilaContenido>
        <ColumnaContenido>
          <ImagenDetalle src="/img/ciclos/carroceria01.jpg" alt="Carrocería" />
        </ColumnaContenido>
        <ColumnaContenido>
          <TextoDetalle titulo="¿Por qué estudiar este ciclo?">
            <p>
              Estos estudios te permitirán desarrollar una carrera como especialista en el mantenimiento de vehículos.
            </p>
            <p>
              Aprenderás los fundamentos de una profesión muy práctica con alta demanda que te permitirá adquirir las destrezas y técnicas que permitan una salida como profesional en trabajos de chapa, transformaciones de carrocerías, vehículos pesados, construcción y reparación de elementos de fibra y pintura
            </p>
          </TextoDetalle>
        </ColumnaContenido>
      </FilaContenido>
    </SeccionOpaca>

    <SeccionTransparente titulo="RAMAS PROFESIONALES">
      <FilaIconos>
        <IconoRama nombre="Reparación de Vehículos" :icono="carCrash" />
        <IconoRama nombre="Embellecimiento de Superficies" :icono="sprayCan" />
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
import {carCrash,cogs, sprayCan} from "~/assets/svg/iconos";
import * as datosCarroceria from "~/assets/data/estudios/carroceria";
import ContenedorFotos from "../../components/wrappers/ContenedorFotos";

export default {
  name: "carroceria",
  data(){
    return{
      carCrash:carCrash,
      cogs:cogs,
      sprayCan:sprayCan,
      datos:datosCarroceria
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
