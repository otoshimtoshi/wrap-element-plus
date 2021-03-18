<template>
  <ELBreadcrumb v-bind="$attrs"></ELBreadcrumb>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELBreadcrumb from 'element-plus/lib/el-breadcrumb'

export default defineComponent({
  name: 'JBreadcrumb',
  components: {
    ELBreadcrumb,
  },
  setup() {},
})
</script>
