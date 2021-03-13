<template>
  <ELScrollbar v-bind="$attrs"></ELScrollbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELScrollbar from "element-plus/lib/el-scrollbar";

export default defineComponent({
  name: "JScrollbar",
  components: {
    ELScrollbar,
  },
  setup() {},
});
</script>
