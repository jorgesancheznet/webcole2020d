<template>
  <footer>
    <div class="filaFooter">
      <ColumnaFooter :titulo="'CONTACTO'">
        <p>
          Pasaje Don Bosco 1,<br>
          34190, Villamuriel de Cerrato <br>
          Tlfno: 979 77 72 70 <br>
          <a href="mailto:colegio@salesianosvillamuriel.es">colegio@salesianosvillamuriel.es</a> <br> <br>
          Horario de atención: De 9:00 a 14:00
        </p>
      </ColumnaFooter>
    </div>
  </footer>

</template>

<script>
import ColumnaFooter from "~/components/pie/ColumnaFooter";
export default {
  name: "Pie",
  components: {ColumnaFooter}
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";
footer {
  position: relative;
  width: 100%;
  padding: 2em 0;
  background-color: $colorFondoPie;

  p,label {
    color: $colorFondoInfo;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  input, textarea {
    width: 100%;
    background-color: $colorFondoServicios;
    border: none;
    outline: none;
    font-size: 1.2em;
    padding: .2em;
    border-radius: .2em;

    &:focus {
      background-color: white;
    }
  }
  button {
    width: 100%;
    padding: 1em;
    border-radius: .2em;
    @include letraNormal(normal,1.2em,$colorFondoServicios);
    background-color: lighten($colorFondoPie, 20%);
    border: none;
    outline: none;
    transition: .5s;

    &:hover {
      background-color: $colorBotonPie;
      transition: 1s;
    }

    &:disabled {
      background-color: lighten($colorFondoPie, 10%);
      color: $colorFondoPie;
    }
  }
}

.filaFooter {
  position: relative;
  display: flex;
  padding: 2em 0;
  width: 100%;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
}

.centroFooter {
  text-align: center;
  width:100%;
  margin-top:1em;
  p {
    color: white;
  }
}

.mapaContenedor{
  background-color:white;
  position:relative;
  img {
    width: 100%;
    max-width: 400px;
  }
  .mapaLink {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 100px;
    background-color: rgba(255, 255, 255, 0.75);
    text-align: center;
    opacity: 0;
    transition: 1s opacity;
    fill:$colorRojoSalesiano;

    a {
      @include letraNormal(normal, .2em, $colorGrisSalesiano);
      text-decoration: none;
    }

    &:hover {
      opacity: 1;
      transition: 1s opacity;
    }

    p {
      margin-top: 0;

      .iconoLink {
        color: $colorRojoSalesiano;
      }
    }
  }
}

.enlaceIcono{
  fill:$colorRojoSalesiano;
}
#pieFinal {
  background-color: darken($colorFondoPie, 10%);
  margin: 0;
  padding: 0;
  text-align: center;
}

.bordePie {
  border-bottom: 1px solid $colorFondoServicios;
  padding-bottom: 1em;
}
</style>
