<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useEquation } from '../state/equation'

export default defineComponent({
  name: 'Options',
  emits: {
    select: (val: number) => val > 0
  },
  setup (props, { emit }) {
    const { reload, options } = useEquation()

    const onSelect = (val: number) => {
      emit('select', val)
    }

    return {
      onSelect,
      reload,
      options
    }
  }
})
</script>

<template>
  <div class="columns is-multiline is-tablet is-mobile">
    <div class="column is-half"
      v-for="(value, i) in options"
      :key="i">
      <button
        @click="onSelect(value)"
        class="button is-link is-light is-large is-fullwidth">
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