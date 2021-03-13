<template>
  <ELTimePicker v-bind="$attrs"></ELTimePicker>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELTimePicker from "element-plus/lib/el-time-picker";

export default defineComponent({
  name: "JTimePicker",
  components: {
    ELTimePicker,
  },
  setup() {},
});
</script>
