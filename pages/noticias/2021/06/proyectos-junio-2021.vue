<template>
  <PaginaNoticia titulo="Presentación de Proyectos del ciclo de ASIR" subtitulo="Junio de 2021"
                 imagen="/img/textura1.jpg">
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>El paso 3 de Junio los alumnos de 2º curso del ciclo de Administración de Sistemas Informáticos en Red han presentado sus proyectos en el Teatro Jesús de Meneses.</p>
          <p>Agradecemos la presencia del alcalde de Villamuriel de Cerrato D. Roberto Martín Casado así como de nuestro
            provincial de Salesianos Santiago el Mayor, Fernando García Sánchez.</p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Autoridades presentes en la presentación de proyectos de Junio 2021"
                       src="/img/noticias/2021/06/Autoridades.jpg" pie="Autoridades presentes en la presentación de proyectos"/>
      </ColumnaContenido>
    </FilaContenido>
    <FilaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Diego Bartolome preparando su presentación" src="/img/noticias/2021/06/Diego_01.jpg" pie="El alumno Diego Bartolome preparando su presentación"/>
      </ColumnaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Este año hemos disfrutar de todo tipo de temáticas en los proyectos</p>
          <p>Hemos visto el funcionamiento de una herramienta web para la gestión de personas y permisos dentro de una
            organización a cargo del alumno <strong>Diego Bartolomé Morate</strong> creado mediante Laravel y aplicando una metodología Scrum.</p>
        </TextoDetalle>
      </ColumnaContenido>
    </FilaContenido>
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>La robótica y el Internet de las Cosas estaba presente en el proyecto <strong>ArduiCar</strong> presentado
            por <strong>Eva María Infante
              Maestro</strong> en el que se demostraba el funcionamiento de un robot automóvil con todo tipo de sensores
          </p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="ArduiCar de Eva María Infante" src="/img/noticias/2021/06/Eva_01.jpg" pie="Examinando el 'ArduiCar' de Eva María Infante"/>
      </ColumnaContenido>
    </FilaContenido>
    <FilaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="benjamin Gordo presentando su proyecto" src="/img/noticias/2021/06/Benjamin_01.jpg" pie="Benjamin Gordo presentando su proyecto sobre las vulnerabilidades OWASP Top 10"/>
      </ColumnaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>El proyecto de ciberseguridad en el que se analizaba las 10 vulnerabilidades web presentes en OWASP Top 10,
            presentado por <strong>Benjamín Gordo Cortés</strong> presentaba un análisis profundo y soluciones ante el
            creciente problema de la seguridad en las aplicaciones web</p>
        </TextoDetalle>
      </ColumnaContenido>
    </FilaContenido>
    <FilaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>Hemos disfrutado de la aplicación web lúdica "Más Moneda" creada por <strong>Adrián Fitiu mediante la cual los participantes pudieron observar los juegos propuestos en la web para obtener monedas virtuales</strong></p>
        </TextoDetalle>
      </ColumnaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="Adrián Fitiu presentando su proyecto" src="/img/noticias/2021/06/Adrian_01.jpg" pie="Adrian Fitiu presentando 'Más Moneda'"/>
      </ColumnaContenido>
    </FilaContenido>
    <FilaContenido>
      <ColumnaContenido>
        <ImagenDetalle alt="José Navarro presentando su proyecto" src="/img/noticias/2021/06/Pepe_01.jpg" pie="José Navarro exponiendo las virtudes de su proyecto de acceso seguro a redes WiFi"/>
      </ColumnaContenido>
      <ColumnaContenido>
        <TextoDetalle>
          <p>El alumno <strong>José Navarro Roldán</strong> presentó una solución virtualizada para el control seguro de
            acceso a una red WiFi en un dominio controlado por servidores Windows Server y autentificado por Radius</p>
        </TextoDetalle>
      </ColumnaContenido>
    </FilaContenido>
    <FilaContenido>
      <TextoDetalle>
        <p>Damos nuestra enhorabuena a todos ellos y desde aquí auguramos un gran futuro en sus trabajos y proyectos
          futuros</p>
        <p>¡Estamos muy orgullosos de los alumnos de ASIR de la promoción de junio de 2021!</p>
      </TextoDetalle>
    </FilaContenido>
  </PaginaNoticia>
</template>

<script>

import PaginaNoticia from "@/components/secciones/PaginaNoticia";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import TextoDetalle from "@/components/TextoDetalle";

export default {
  components: {PaginaNoticia, FilaContenido, ColumnaContenido, TextoDetalle}
}
</script>

<style scoped>

</style>
