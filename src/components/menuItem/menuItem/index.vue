<template>
  <ELMenuItem v-bind="$attrs"></ELMenuItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELMenuItem from "element-plus/lib/el-menu-item";

export default defineComponent({
  name: "JMenuItem",
  components: {
    ELMenuItem,
  },
  setup() {},
});
</script>
