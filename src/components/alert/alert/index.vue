<template>
  <ELAlert v-bind="$attrs"></ELAlert>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELAlert from 'element-plus/lib/el-alert'

export default defineComponent({
  name: 'JAlert',
  components: {
    ELAlert,
  },
  setup() {},
})
</script>
