<template>
  <PageHeader />
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageHeader from './components/PageHeader.vue'

export default defineComponent({
  name: 'Root',
  components: {
    PageHeader
  }
})
</script>

<style>

</style>