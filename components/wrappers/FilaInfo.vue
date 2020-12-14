<template>
<div class="filaInfo">
  <ItemInfo :info="infoFila.izquierda" :retardoMin="200" :retardoMax="800" :duracionMin="400" :duracionMax="1500"
  :efecto="'fade-left'"/>
  <ItemInfo :info="infoFila.derecha" :retardoMin="200" :retardoMax="800" :duracionMin="400" :duracionMax="1500" :efecto="'fade-right'"/>
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
