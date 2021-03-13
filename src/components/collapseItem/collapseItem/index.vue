<template>
  <ELCollapseItem v-bind="$attrs"></ELCollapseItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELCollapseItem from "element-plus/lib/el-collapse-item";

export default defineComponent({
  name: "JCollapseItem",
  components: {
    ELCollapseItem,
  },
  setup() {},
});
</script>
