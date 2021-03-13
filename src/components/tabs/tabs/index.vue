<template>
  <ELTabs v-bind="$attrs"></ELTabs>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELTabs from "element-plus/lib/el-tabs";

export default defineComponent({
  name: "JTabs",
  components: {
    ELTabs,
  },
  setup() {},
});
</script>
