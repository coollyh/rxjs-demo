import { operate } from "./operate"

export function count() {
  let sum = 0
  return operate((x, next) => {
    sum += 1;
    next(sum
      )
  })
}