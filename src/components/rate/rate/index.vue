<template>
  <ELRate v-bind="$attrs"></ELRate>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELRate from "element-plus/lib/el-rate";

export default defineComponent({
  name: "JRate",
  components: {
    ELRate,
  },
  setup() {},
});
</script>
