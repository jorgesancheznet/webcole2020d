<template>
  <div>
    <SeccionOpaca titulo="PÁGINA NO ENCONTRADA">
      <FilaContenido>
        <ColumnaContenido>
          <h3>
            El recurso solicitado no se ha podido encontrar
          </h3>
        </ColumnaContenido>
      </FilaContenido>
    </SeccionOpaca>
    <SplashPanel imagen="/static/img/fondo.jpg"></SplashPanel>
  </div>
</template>

<script>
import SeccionOpaca from "@/components/secciones/SeccionOpaca";
import FilaContenido from "@/components/wrappers/FilaContenido";
import ColumnaContenido from "@/components/wrappers/ColumnaContenido";
import SplashPanel from "@/components/secciones/SplashPanel";

export default {
  components: {SplashPanel, ColumnaContenido, FilaContenido, SeccionOpaca},
  props: ["error"],
  layout: "default"
}
</script>

<style scoped>

</style>
