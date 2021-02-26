<script lang="ts">
import { defineComponent } from 'vue'
import { useEquation } from '../state/equation'

export default defineComponent({
  name: 'Equation',
  setup () {
    const { equation } = useEquation()

    return {
      equation
    }
  }
})
</script>

<template>
  <section class="hero mb-4 is-link">
    <div class="hero-body">
      <p class="title">
        {{ equation }}
      </p>
    </div>
  </section>
</template>

<style scoped>
  p {
    text-align: center;
  }
</style>