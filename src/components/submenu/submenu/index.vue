<template>
  <ELSubmenu v-bind="$attrs"></ELSubmenu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELSubmenu from "element-plus/lib/el-submenu";

export default defineComponent({
  name: "JSubmenu",
  components: {
    ELSubmenu,
  },
  setup() {},
});
</script>
