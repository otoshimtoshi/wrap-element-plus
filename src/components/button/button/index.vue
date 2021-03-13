<template>
  <ELButton v-bind="$attrs"><slot /></ELButton>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELButton from "element-plus/lib/el-button";

export default defineComponent({
  name: "JButton",
  components: {
    ELButton,
  },
  setup() {},
});
</script>
