<script>
import {submenuCabecera} from "~/assets/data/submenuCabecera";
import Cabecera from "~/components/cabecera/Cabecera";
import Pie from "~/components/pie/Pie";

export default {
  components: {Pie, Cabecera},
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
    <Pie />
  </div>
</template>

<style type="scss">

</style>
