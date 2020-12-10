<template>
  <div class="filaLogos" data-aos="zoom-in-up" data-aos-delay="300"
       data-aos-duration="500" data-aos-easing="ease-out-cubic">
    <img src="/img/logos/tic5.png" alt="Cisco NetWorking Academy" >
    <img class="logoAlto" src="/img/logos/calidad.png" alt="Cisco NetWorking Academy">
    <img class="logoAlto" src="/img/logos/cisco.png" alt="Cisco NetWorking Academy">
    <img src="/img/logos/ms-reverse.png" class="logoLargo" alt="Microsoft Imagine Academy">
    <img src="/img/logos/oracle-reverse.png" alt="Oracle Academy">
    <img class="logoCorto" src="/img/logos/vmware.png" alt="VMWare Academy">
  </div>
</template>

<script>
export default {
  name: "FilaLogos"
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.filaLogos{
  position:relative;
  width:100%;
  display:flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  img{
    height:$anchoLogoFinal;
    align-items: center;
    margin:1em;
    &.logoAlto{
      height: $anchoLogoFinalAlto;
    }
    &.logoCorto{
      height: $anchoLogoFinalCorto;
    }
  }
  &.inView{
    opacity:1;
    transform:scaleX(1);
  }
}
</style>
