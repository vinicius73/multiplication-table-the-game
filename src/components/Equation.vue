<script lang="ts">
import { defineComponent } from 'vue'
import { useEquation } from '../state/equation'

export default defineComponent({
  name: 'Equation',
  setup () {
    const { equation, result, reload } = useEquation()

    return {
      reload,
      result,
      equation
    }
  }
})
</script>

<template>
  <div class="box">
    <pre>{{equation}}</pre>
    <br>
    <pre>{{ result }}</pre>
    <br>
    <button class="button" @click="reload">
      reload
    </button>
  </div>
</template>