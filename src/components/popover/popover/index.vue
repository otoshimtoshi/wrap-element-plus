<template>
  <ELPopover v-bind="$attrs"></ELPopover>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELPopover from "element-plus/lib/el-popover";

export default defineComponent({
  name: "JPopover",
  components: {
    ELPopover,
  },
  setup() {},
});
</script>
