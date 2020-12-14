<template>
  <div class="itemInfo"
       :data-aos-delay="aleatorio(retardoMin,retardoMax)"
       :data-aos="efecto"
       :data-aos-duration="aleatorio(duracionMin,duracionMax)"
       :data-aos-easing="easing" :data-aos-once="once">
    <div class="texto">
      <h3>{{ titulo }}</h3>
      <p v-html="info.descripcion"></p>
    </div>
    <img :src="info.image" alt="info.alt">
  </div>
</template>

<script>
export default {
  name: "ItemInfo",
  props: {
    info: Object,
    retardoMin: {
      type: Number,
      default: 0
    },
    retardoMax: {
      type: Number,
      default: 0
    },
    efecto: {
      type: String,
      default: "flip-up"
    },
    duracionMin: {
      type: Number,
      default: 0
    },
    duracionMax: {
      type: Number,
      default: 0
    },
    easing: {
      type: String,
      default: "ease-out-cubic"
    },
    once:{
      type: Boolean,
      default: "true"
    }
  },
  methods: {
    aleatorio(min, max) {
      return Math.round(Math.random() * (max - min) + parseInt(min))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.itemInfo {
  display: flex;
  align-items: center;

  &:last-of-type {
    flex-direction: row-reverse;

    .texto {
      text-align: left;
    }
  }

  img {
    width: $anchoImgInfoCentral;
    height: $altoImgInfoCentral;
    margin: $margenImgInfoCentral;
  }

  .texto {
    text-align: right;

    h3 {
      @include letraNormal(normal, 2em, $colorGrisSalesiano);
      margin: 0;
    }

    p {
      @include letraNormal(light, 1.3em, black);
    }
  }
}

@media (max-width: $anchoMedio) {
  .itemInfo {
    flex-direction: column-reverse;

    &:last-of-type {
      flex-direction: column-reverse;
    }

    img {
      width: $anchoImgInfoCentralMedio;
      height: $altoImgInfoCentralMedio;
      margin: $margenImgInfoCentralMedio;
    }

    .texto {
      text-align: center !important;

      h3 {
        margin: 1em 0 0 0;
      }

      p {
        margin: 0 0 3em 0;
      }
    }
  }
}

</style>
