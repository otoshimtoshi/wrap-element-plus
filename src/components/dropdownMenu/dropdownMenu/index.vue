<template>
  <ELDropdownMenu v-bind="$attrs"></ELDropdownMenu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELDropdownMenu from "element-plus/lib/el-dropdown-menu";

export default defineComponent({
  name: "JDropdownMenu",
  components: {
    ELDropdownMenu,
  },
  setup() {},
});
</script>
