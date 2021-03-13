<template>
  <ELForm v-bind="$attrs"></ELForm>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELForm from "element-plus/lib/el-form";

export default defineComponent({
  name: "JForm",
  components: {
    ELForm,
  },
  setup() {},
});
</script>
