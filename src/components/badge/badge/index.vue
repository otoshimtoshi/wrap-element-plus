<template>
  <ELBadge v-bind="$attrs"></ELBadge>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELBadge from 'element-plus/lib/el-badge'

export default defineComponent({
  name: 'JBadge',
  components: {
    ELBadge,
  },
  setup() {},
})
</script>
