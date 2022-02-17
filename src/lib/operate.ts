import { Observable, Subscriber } from "rxjs"

export function operate<T>(scheduler: (item: T, next: (x: T) => void) => void) {
  return (observable: Observable<T>) => {
    let _subscriber: Subscriber<unknown> | null = null
    observable.subscribe((e) => {
      scheduler(e, x => _subscriber?.next(x))
    })
    return new Observable(subscriber => {
      _subscriber = subscriber
    })
  }
}