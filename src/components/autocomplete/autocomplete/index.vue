<template>
  <ELAutocomplete v-bind="$attrs"></ELAutocomplete>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ELAutocomplete from 'element-plus/lib/el-autocomplete'

export default defineComponent({
  name: 'JAutocomplete',
  components: {
    ELAutocomplete,
  },
  setup() {},
})
</script>
