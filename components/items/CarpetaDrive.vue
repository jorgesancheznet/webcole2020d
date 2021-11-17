<template>
  <iframe :src="src"></iframe>
</template>

<script>
export default {
  name: "CarpetaDrive",
  props:{
    src:String
  }
}
</script>

<style scoped>
iframe{
  width:100%;
  height:400px;
  overflow: auto;
  border:none;
  text-align: center;
}
</style>
