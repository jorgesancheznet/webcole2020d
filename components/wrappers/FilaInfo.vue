<template>
<div class="filaInfo">
  <ItemInfo :info="infoFila.izquierda" />
  <ItemInfo :info="infoFila.derecha" />
</div>
</template>

<script>
import ItemInfo from "@/components/items/ItemInfo";
export default {
  name: "FilaInfo",
  components: {ItemInfo},
  props:{
    infoFila:Object
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/estilos/mixins.scss";

.filaInfo {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media  (max-width: $anchoMedio) {
  .filaInfo {
    flex-direction: column-reverse;
  }
}
</style>
