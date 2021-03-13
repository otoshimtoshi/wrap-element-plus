<template>
  <ELHeader v-bind="$attrs"></ELHeader>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELHeader from "element-plus/lib/el-header";

export default defineComponent({
  name: "JHeader",
  components: {
    ELHeader,
  },
  setup() {},
});
</script>
