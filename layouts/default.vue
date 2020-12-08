<script>
import Cabecera from "~/components/cabecera/Cabecera";
import {submenuCabecera} from "~/assets/data/submenuCabecera";

export default {
  components: {Cabecera},
  data() {
    return {
      submenu:submenuCabecera
    }
  }
}
;
</script>
<template>
  <div>
    <Cabecera :submenuCabecera="submenu"></Cabecera>
    <Nuxt/>
    <div id="prueba" style="background-color: gray;width:100%;position:relative;height:200vh">

    </div>
  </div>
</template>

<style type="scss">

</style>
