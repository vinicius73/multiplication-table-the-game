<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    return  {
      version: import.meta.env.VITE_APP_VERSION
    }
  }
})
</script>

<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <a href="https://github.com/vinicius73/multiplication-table-the-game" target="_blank" class="tag is-warning">
          v{{ version }}
        </a>
      </p>
      <p>
        By <a href="https://vinicius73.dev">Vinicius Reis</a>. <br>
        The <a href="https://github.com/vinicius73/multiplication-table-the-game" target="_blank">source code</a> is licensed
        <a href="https://opensource.org/licenses/GPL-3.0">GPL-3.0+</a>.
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding-top: 1em;
  padding-bottom: 1.5em;
}
</style>