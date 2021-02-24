import { ref, readonly, computed } from 'vue'
import { random } from 'lodash-es'

const state = ref([1, 1])

const equation = computed<string>(() => {
  const [a, b] = state.value

  return `${a} x ${b} = ?`
})

const result = computed<Number>(() => {
  const [a, b] = state.value

  return a * b
})

const reload = () => {
  state.value = [
    random(1, 10),
    random(1, 10),
  ]
}

const useEquation = () => {
  return {
    equation,
    reload,
    result,
    state: readonly(state)
  }
}

reload()

export {
  useEquation
}