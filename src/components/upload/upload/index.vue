<template>
  <ELUpload v-bind="$attrs"></ELUpload>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELUpload from "element-plus/lib/el-upload";

export default defineComponent({
  name: "JUpload",
  components: {
    ELUpload,
  },
  setup() {},
});
</script>
