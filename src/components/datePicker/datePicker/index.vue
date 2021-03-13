<template>
  <ELDatePicker v-bind="$attrs"></ELDatePicker>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELDatePicker from "element-plus/lib/el-date-picker";

export default defineComponent({
  name: "JDatePicker",
  components: {
    ELDatePicker,
  },
  setup() {},
});
</script>
