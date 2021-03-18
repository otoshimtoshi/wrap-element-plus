<template>
  <ELAside v-bind="$attrs"></ELAside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELAside from 'element-plus/lib/el-aside'

export default defineComponent({
  name: 'JAside',
  components: {
    ELAside,
  },
  setup() {},
})
</script>
