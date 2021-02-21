<script>
import {submenuCabecera} from "~/assets/data/submenuCabecera";
import Cabecera from "~/components/cabecera/Cabecera";
import Pie from "~/components/pie/Pie";
import TelonFondo from "~/components/secciones/TelonFondo";




export default {
  components: {TelonFondo, Pie, Cabecera},
  data() {
    return {
      submenu:submenuCabecera
    }
  },
  computed:{
    fondo(){
      return this.$store.state.fondo
    }
  }
}
;
</script>
<template>
  <div>
    <TelonFondo :imagen="fondo" :alt="'fondo'" />
    <Cabecera :submenuCabecera="submenu"></Cabecera>
    <Nuxt/>
    <Pie />
  </div>
</template>

<style type="scss" scoped>
main{
  background: transparent no-repeat center center fixed;
  background-size: cover;
}
</style>
