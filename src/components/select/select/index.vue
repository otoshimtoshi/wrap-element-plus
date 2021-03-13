<template>
  <ELSelect v-bind="$attrs"></ELSelect>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELSelect from "element-plus/lib/el-select";

export default defineComponent({
  name: "JSelect",
  components: {
    ELSelect,
  },
  setup() {},
});
</script>
