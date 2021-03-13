<template>
  <ELDropdownItem v-bind="$attrs"></ELDropdownItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELDropdownItem from "element-plus/lib/el-dropdown-item";

export default defineComponent({
  name: "JDropdownItem",
  components: {
    ELDropdownItem,
  },
  setup() {},
});
</script>
