<template>
  <ELSwitch v-bind="$attrs"></ELSwitch>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELSwitch from "element-plus/lib/el-switch";

export default defineComponent({
  name: "JSwitch",
  components: {
    ELSwitch,
  },
  setup() {},
});
</script>
