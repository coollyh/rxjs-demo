import { operate } from "./operate"
import { debounce as _debounce } from 'lodash'


export function debounce<T>(ms: number) {
  function fn(x: T, next: (x: T) => void) {
    next(x)
  }
  return operate(_debounce(fn, ms))
}