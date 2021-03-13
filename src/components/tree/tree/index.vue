<template>
  <ELTree v-bind="$attrs"></ELTree>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELTree from "element-plus/lib/el-tree";

export default defineComponent({
  name: "JTree",
  components: {
    ELTree,
  },
  setup() {},
});
</script>
