<template>
  <ELCarousel v-bind="$attrs"></ELCarousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELCarousel from "element-plus/lib/el-carousel";

export default defineComponent({
  name: "JCarousel",
  components: {
    ELCarousel,
  },
  setup() {},
});
</script>
