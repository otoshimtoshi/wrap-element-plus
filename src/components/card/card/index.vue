<template>
  <ELCard v-bind="$attrs"></ELCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELCard from 'element-plus/lib/el-card'

export default defineComponent({
  name: 'JCard',
  components: {
    ELCard,
  },
  setup() {},
})
</script>
