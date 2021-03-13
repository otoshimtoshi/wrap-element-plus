<template>
  <ELDropdown v-bind="$attrs"></ELDropdown>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELDropdown from "element-plus/lib/el-dropdown";

export default defineComponent({
  name: "JDropdown",
  components: {
    ELDropdown,
  },
  setup() {},
});
</script>
