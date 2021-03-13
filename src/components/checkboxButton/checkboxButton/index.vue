<template>
  <ELCheckboxButton v-bind="$attrs"></ELCheckboxButton>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELCheckboxButton from "element-plus/lib/el-checkbox-button";

export default defineComponent({
  name: "JCheckboxButton",
  components: {
    ELCheckboxButton,
  },
  setup() {},
});
</script>
