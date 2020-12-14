<template>
  <div class="itemInfo">
    <div class="texto">
      <h3>{{titulo}}</h3>
      <p v-html="info.descripcion"></p>
    </div>
    <img :src="info.image" alt="info.alt">
  </div>
</template>

<script>
export default {
  name: "ItemInfo",
  props:{
    info:Object
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.itemInfo{
  display:flex;
  align-items: center;
  &:last-of-type{
    flex-direction: row-reverse;
    .texto{
      text-align: left;
    }
  }
  img{
    width:$anchoImgInfoCentral;
    height:$altoImgInfoCentral;
    margin:$margenImgInfoCentral;
  }
  .texto{
    text-align: right;
    h3{
      @include letraNormal(normal,2em,$colorGrisSalesiano);
      margin:0;
    }
    p{
      @include letraNormal(light, 1.3em, black);
    }
  }
}
@media  (max-width: $anchoMedio) {
  .itemInfo {
    flex-direction: column-reverse;
    &:last-of-type{
      flex-direction:column-reverse;
    }
    img{
      width:$anchoImgInfoCentralMedio;
      height:$altoImgInfoCentralMedio;
      margin:$margenImgInfoCentralMedio;
    }
    .texto{
      text-align: center !important;
      h3{
        margin:1em 0 0 0;
      }
      p{
        margin:0 0 3em 0;
      }
    }
  }
}

</style>
