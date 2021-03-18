<template>
  <ELCalendar v-bind="$attrs"></ELCalendar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELCalendar from 'element-plus/lib/el-calendar'

export default defineComponent({
  name: 'JCalendar',
  components: {
    ELCalendar,
  },
  setup() {},
})
</script>
