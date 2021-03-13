<template>
  <ELTabPane v-bind="$attrs"></ELTabPane>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELTabPane from "element-plus/lib/el-tab-pane";

export default defineComponent({
  name: "JTabPane",
  components: {
    ELTabPane,
  },
  setup() {},
});
</script>
