<template>
  <ELRadio v-bind="$attrs"></ELRadio>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELRadio from "element-plus/lib/el-radio";

export default defineComponent({
  name: "JRadio",
  components: {
    ELRadio,
  },
  setup() {},
});
</script>
