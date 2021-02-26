<template>
  <PageHeader />
  <section class="section">
    <div class="container is-max-desktop">
      <Equation :value="selected" />
      <Options @select="onSelect" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageHeader from './components/PageHeader.vue'
import Equation from './components/Equation.vue'
import Options from './components/Options.vue'

export default defineComponent({
  name: 'Root',
  components: {
    PageHeader,
    Equation,
    Options
  },
  setup () {
    const selected = ref(0)

    const onSelect = (val: number) => {
      selected.value = val

      setTimeout(() => {
        selected.value = 0
      }, 700)
    }

    return {
      selected,
      onSelect
    }
  }
})
</script>
