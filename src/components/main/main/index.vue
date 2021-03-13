<template>
  <ELMain v-bind="$attrs"></ELMain>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELMain from "element-plus/lib/el-main";

export default defineComponent({
  name: "JMain",
  components: {
    ELMain,
  },
  setup() {},
});
</script>
