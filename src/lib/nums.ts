import {
  size as length,
  random,
  sample,
  uniq,
  map,
  filter
} from 'lodash-es'

const generateNumber = (real: number, sum: number): number => {
  const min = Math.ceil(random(real * 3, sum + 1))

  return random(
    random(real * 2, min)
  )
}

const generateList = (size: number, a: number, b: number): number[] => {
  const real = a * b
  const sum = a + b

  const r = sample<number>([a, b]) || 1

  const nums = uniq(filter([
    real,
    sum,
    Math.ceil(sum * (Math.random() * r)),
    random(real * 2, sum + 1),
  ], x => x > 0))

  const len = length(nums)

  if (len < size) {
    const miss = size - len

    return [
      ...nums,
      ...map(Array.from({ length: miss }), () => generateNumber(real, sum))
    ]
  }

  return nums
}

export {
  generateList
}