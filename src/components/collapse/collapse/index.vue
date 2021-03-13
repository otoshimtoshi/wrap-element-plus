<template>
  <ELCollapse v-bind="$attrs"></ELCollapse>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELCollapse from "element-plus/lib/el-collapse";

export default defineComponent({
  name: "JCollapse",
  components: {
    ELCollapse,
  },
  setup() {},
});
</script>
