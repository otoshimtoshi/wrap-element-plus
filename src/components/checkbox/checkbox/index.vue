<template>
  <ELCheckbox v-bind="$attrs"></ELCheckbox>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELCheckbox from 'element-plus/lib/el-checkbox'

export default defineComponent({
  name: 'JCheckbox',
  components: {
    ELCheckbox,
  },
  setup() {},
})
</script>
