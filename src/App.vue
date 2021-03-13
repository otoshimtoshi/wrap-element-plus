<template>
  <div>
    <j-alert title="success alert" type="success"></j-alert>
    <j-alert title="info alert" type="info"> </j-alert>
    <j-alert title="warning alert" type="warning"> </j-alert>
    <j-alert title="error alert" type="error"> </j-alert>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({});
    return {
      state,
    };
  },
});
</script>
