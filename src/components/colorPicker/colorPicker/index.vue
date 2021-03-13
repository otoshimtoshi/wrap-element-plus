<template>
  <ELColorPicker v-bind="$attrs"></ELColorPicker>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELColorPicker from "element-plus/lib/el-color-picker";

export default defineComponent({
  name: "JColorPicker",
  components: {
    ELColorPicker,
  },
  setup() {},
});
</script>
