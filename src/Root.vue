<template>
  <div id="wrapper">
    <PageHeader />
    <section class="section">
      <div class="container is-max-desktop">
        <Equation :value="selected" />
        <Options @select="onSelect" />
      </div>
    </section>
  </div>
  <PageFooter />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageHeader from './components/PageHeader.vue'
import Equation from './components/Equation.vue'
import Options from './components/Options.vue'
import PageFooter from './components/PageFooter.vue'

export default defineComponent({
  name: 'Root',
  components: {
    PageHeader,
    PageFooter,
    Equation,
    Options,
  },
  setup () {
    const selected = ref(0)

    const onSelect = (val: number) => {
      selected.value = val

      setTimeout(() => {
        selected.value = 0
      }, 900)
    }

    return {
      selected,
      onSelect
    }
  }
})
</script>
