<template>
  <ELAvatar v-bind="$attrs"></ELAvatar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELAvatar from 'element-plus/lib/el-avatar'

export default defineComponent({
  name: 'JAvatar',
  components: {
    ELAvatar,
  },
  setup() {},
})
</script>
