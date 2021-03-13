<template>
  <ELInput v-bind="$attrs"></ELInput>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELInput from "element-plus/lib/el-input";

export default defineComponent({
  name: "JInput",
  components: {
    ELInput,
  },
  setup() {},
});
</script>
