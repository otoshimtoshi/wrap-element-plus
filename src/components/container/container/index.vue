<template>
  <ELContainer v-bind="$attrs"></ELContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELContainer from "element-plus/lib/el-container";

export default defineComponent({
  name: "JContainer",
  components: {
    ELContainer,
  },
  setup() {},
});
</script>
