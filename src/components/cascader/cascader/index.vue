<template>
  <ELCascader v-bind="$attrs"></ELCascader>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELCascader from 'element-plus/lib/el-cascader'

export default defineComponent({
  name: 'JCascader',
  components: {
    ELCascader,
  },
  setup() {},
})
</script>
