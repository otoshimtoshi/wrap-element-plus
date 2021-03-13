<template>
  <ELPageHeader v-bind="$attrs"></ELPageHeader>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELPageHeader from "element-plus/lib/el-page-header";

export default defineComponent({
  name: "JPageHeader",
  components: {
    ELPageHeader,
  },
  setup() {},
});
</script>
