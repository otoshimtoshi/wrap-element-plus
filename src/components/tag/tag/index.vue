<template>
  <ELTag v-bind="$attrs"></ELTag>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELTag from "element-plus/lib/el-tag";

export default defineComponent({
  name: "JTag",
  components: {
    ELTag,
  },
  setup() {},
});
</script>
