<template>
  <ELSlider v-bind="$attrs"></ELSlider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELSlider from "element-plus/lib/el-slider";

export default defineComponent({
  name: "JSlider",
  components: {
    ELSlider,
  },
  setup() {},
});
</script>
