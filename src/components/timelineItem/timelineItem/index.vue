<template>
  <ELTimelineItem v-bind="$attrs"></ELTimelineItem>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ELTimelineItem from "element-plus/lib/el-timeline-item";

export default defineComponent({
  name: "JTimelineItem",
  components: {
    ELTimelineItem,
  },
  setup() {},
});
</script>
