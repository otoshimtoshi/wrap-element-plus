<template>
  <ELRadioButton v-bind="$attrs"></ELRadioButton>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELRadioButton from "element-plus/lib/el-radio-button";

export default defineComponent({
  name: "JRadioButton",
  components: {
    ELRadioButton,
  },
  setup() {},
});
</script>
