<template>
  <ELInputNumber v-bind="$attrs"></ELInputNumber>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELInputNumber from "element-plus/lib/el-input-number";

export default defineComponent({
  name: "JInputNumber",
  components: {
    ELInputNumber,
  },
  setup() {},
});
</script>
