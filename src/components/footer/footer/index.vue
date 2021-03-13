<template>
  <ELFooter v-bind="$attrs"></ELFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELFooter from "element-plus/lib/el-footer";

export default defineComponent({
  name: "JFooter",
  components: {
    ELFooter,
  },
  setup() {},
});
</script>
