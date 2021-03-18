<template>
  <ELCarouselItem v-bind="$attrs"></ELCarouselItem>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELCarouselItem from 'element-plus/lib/el-carousel-item'

export default defineComponent({
  name: 'JCarouselItem',
  components: {
    ELCarouselItem,
  },
  setup() {},
})
</script>
