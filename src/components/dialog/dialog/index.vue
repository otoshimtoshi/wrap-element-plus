<template>
  <ELDialog v-bind="$attrs"></ELDialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELDialog from "element-plus/lib/el-dialog";

export default defineComponent({
  name: "JDialog",
  components: {
    ELDialog,
  },
  setup() {},
});
</script>
