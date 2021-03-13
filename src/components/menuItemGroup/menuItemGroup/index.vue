<template>
  <ELMenuItemGroup v-bind="$attrs"></ELMenuItemGroup>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELMenuItemGroup from "element-plus/lib/el-menu-item-group";

export default defineComponent({
  name: "JMenuItemGroup",
  components: {
    ELMenuItemGroup,
  },
  setup() {},
});
</script>
