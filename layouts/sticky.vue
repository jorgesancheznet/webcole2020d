<script>
import {submenuCabecera} from "~/assets/data/submenuCabecera";
import Cabecera from "~/components/cabecera/Cabecera";
import TelonFondo from "~/components/secciones/TelonFondo";




export default {
  components: {TelonFondo, Cabecera},
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
  </div>
</template>

<style type="scss">

</style>
