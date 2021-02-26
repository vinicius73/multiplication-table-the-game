<template>
  <PageHeader />
  <section class="section">
    <div class="container is-max-desktop">
      <Equation />
      <Options />
      <!-- <div class="columns">
        <div class="column">
        </div>
        <div class="column">
        </div>
      </div> -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from './components/PageHeader.vue'
import Equation from './components/Equation.vue'
import Options from './components/Options.vue'

export default defineComponent({
  name: 'Root',
  components: {
    PageHeader,
    Equation,
    Options
  }
})
</script>

<style>

</style>