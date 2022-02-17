import { operate } from "./operate";

export function delay(ms: number) {
  return operate((e, next) => {
    setTimeout(() => {
      next(e)
    }, ms)
  })
}
