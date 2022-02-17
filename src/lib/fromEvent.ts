import { Observable, Subscriber } from 'rxjs'

function fromEvent(element: HTMLElement, eventType: string) {
  // div,click
  let _subscriber: Subscriber<unknown> | null = null
  function handler(e: Event) {
    _subscriber?.next(e)
  }

  element.addEventListener(eventType, handler)
  return new Observable(subscriber => {
    _subscriber = subscriber
  })
}

export default fromEvent