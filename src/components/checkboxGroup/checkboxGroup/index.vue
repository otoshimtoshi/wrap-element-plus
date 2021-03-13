<template>
  <ELCheckboxGroup v-bind="$attrs"></ELCheckboxGroup>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELCheckboxGroup from "element-plus/lib/el-checkbox-group";

export default defineComponent({
  name: "JCheckboxGroup",
  components: {
    ELCheckboxGroup,
  },
  setup() {},
});
</script>
