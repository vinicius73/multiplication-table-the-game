<script lang="ts">
import { computed, defineComponent, watch, watchEffect } from 'vue'
import { useEquation } from '../state/equation'

export default defineComponent({
  name: 'Equation',
  props: {
    value: Number
  },
  setup (props) {
    const { equation, reload, result } = useEquation()

    const isValid = computed(() => props.value === result.value)
    const bgColor = computed(() => {
      if (props.value === 0) {
        return 'has-background-link'
      }

      return isValid.value ? 'has-background-success' : 'has-background-danger'
    })

    watchEffect(() => {
      if (props.value === 0) {
        reload()
      }
    })

    return {
      equation,
      bgColor
    }
  }
})
</script>

<template>
  <p :class="bgColor" class="title has-text-white p-6">
    {{ equation }}
  </p>
</template>

<style scoped>
  p {
    border-radius: 0.3em;
    text-align: center;
  }
</style>