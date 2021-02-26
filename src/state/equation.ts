import { ref, readonly, computed } from 'vue'
import { random, shuffle } from 'lodash-es'
import { generateList } from '../lib/nums'

const state = ref([1, 1])

const result = computed<number>(() => {
  const [a, b] = state.value

  return a * b
})

const options = computed<number[]>(() => {
  const [a, b] = state.value

  return shuffle(
    generateList(4, a, b)
  )
})

const reload = () => {
  state.value = [
    random(1, 10),
    random(1, 10),
  ]
}

const useEquation = () => {
  return {
    options,
    reload,
    result,
    state: readonly(state)
  }
}

reload()

export {
  useEquation
}