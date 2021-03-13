<template>
  <ELTransfer v-bind="$attrs"></ELTransfer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELTransfer from "element-plus/lib/el-transfer";

export default defineComponent({
  name: "JTransfer",
  components: {
    ELTransfer,
  },
  setup() {},
});
</script>
