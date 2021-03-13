<template>
  <ELRadioGroup v-bind="$attrs"></ELRadioGroup>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELRadioGroup from "element-plus/lib/el-radio-group";

export default defineComponent({
  name: "JRadioGroup",
  components: {
    ELRadioGroup,
  },
  setup() {},
});
</script>
