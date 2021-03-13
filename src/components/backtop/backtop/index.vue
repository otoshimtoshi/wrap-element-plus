<template>
  <ELBacktop v-bind="$attrs"></ELBacktop>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELBacktop from "element-plus/lib/el-backtop";

export default defineComponent({
  name: "JBacktop",
  components: {
    ELBacktop,
  },
  setup() {},
});
</script>
