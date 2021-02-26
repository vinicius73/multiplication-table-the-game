<script lang="ts">
import { defineComponent } from 'vue'
import { useEquation } from '../state/equation'

export default defineComponent({
  name: 'Options',
  setup () {
    const { equation, result, reload, options } = useEquation()

    return {
      reload,
      result,
      options,
      equation
    }
  }
})
</script>

<template>
  <div class="columns is-desktop">
    <div class="column"
      v-for="(value, i) in options"
      :key="i">
      <button class="button is-link is-light is-large is-fullwidth">
        {{ value }}
      </button>
    </div>
  </div>
</template>

<style scoped>
  h2 {
    text-align: center;
  }
</style>