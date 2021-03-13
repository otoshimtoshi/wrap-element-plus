<template>
  <ELProgress v-bind="$attrs"></ELProgress>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELProgress from "element-plus/lib/el-progress";

export default defineComponent({
  name: "JProgress",
  components: {
    ELProgress,
  },
  setup() {},
});
</script>
