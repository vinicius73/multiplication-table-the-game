<template>
  <PageHeader />
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-two-fifths">
          <Equation />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from './components/PageHeader.vue'
import Equation from './components/Equation.vue'

export default defineComponent({
  name: 'Root',
  components: {
    PageHeader,
    Equation
  }
})
</script>

<style>

</style>