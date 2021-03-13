<template>
  <ELRow v-bind="$attrs"></ELRow>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELRow from "element-plus/lib/el-row";

export default defineComponent({
  name: "JRow",
  components: {
    ELRow,
  },
  setup() {},
});
</script>
