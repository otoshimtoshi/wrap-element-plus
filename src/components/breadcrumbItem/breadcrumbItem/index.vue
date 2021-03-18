<template>
  <ELBreadcrumbItem v-bind="$attrs"></ELBreadcrumbItem>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELBreadcrumbItem from 'element-plus/lib/el-breadcrumb-item'

export default defineComponent({
  name: 'JBreadcrumbItem',
  components: {
    ELBreadcrumbItem,
  },
  setup() {},
})
</script>
