<template>
  <ELOptionGroup v-bind="$attrs"></ELOptionGroup>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELOptionGroup from "element-plus/lib/el-option-group";

export default defineComponent({
  name: "JOptionGroup",
  components: {
    ELOptionGroup,
  },
  setup() {},
});
</script>
