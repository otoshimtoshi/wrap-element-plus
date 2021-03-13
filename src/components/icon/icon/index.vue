<template>
  <ELIcon v-bind="$attrs"></ELIcon>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELIcon from "element-plus/lib/el-icon";

export default defineComponent({
  name: "JIcon",
  components: {
    ELIcon,
  },
  setup() {},
});
</script>
