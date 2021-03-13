<template>
  <ELCascaderPanel v-bind="$attrs"></ELCascaderPanel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELCascaderPanel from "element-plus/lib/el-cascader-panel";

export default defineComponent({
  name: "JCascaderPanel",
  components: {
    ELCascaderPanel,
  },
  setup() {},
});
</script>
