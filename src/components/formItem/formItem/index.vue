<template>
  <ELFormItem v-bind="$attrs"></ELFormItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELFormItem from "element-plus/lib/el-form-item";

export default defineComponent({
  name: "JFormItem",
  components: {
    ELFormItem,
  },
  setup() {},
});
</script>
