<template>
  <ELButtonGroup v-bind="$attrs"></ELButtonGroup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELButtonGroup from 'element-plus/lib/el-button-group'

export default defineComponent({
  name: 'JButtonGroup',
  components: {
    ELButtonGroup,
  },
  setup() {},
})
</script>
