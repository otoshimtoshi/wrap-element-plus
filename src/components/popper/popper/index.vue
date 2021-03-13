<template>
  <ELPopper v-bind="$attrs"></ELPopper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELPopper from "element-plus/lib/el-popper";

export default defineComponent({
  name: "JPopper",
  components: {
    ELPopper,
  },
  setup() {},
});
</script>
