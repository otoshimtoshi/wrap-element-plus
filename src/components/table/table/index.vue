<template>
  <ELTable v-bind="$attrs"></ELTable>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELTable from "element-plus/lib/el-table";

export default defineComponent({
  name: "JTable",
  components: {
    ELTable,
  },
  setup() {},
});
</script>
