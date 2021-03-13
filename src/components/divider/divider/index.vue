<template>
  <ELDivider v-bind="$attrs"></ELDivider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELDivider from "element-plus/lib/el-divider";

export default defineComponent({
  name: "JDivider",
  components: {
    ELDivider,
  },
  setup() {},
});
</script>
