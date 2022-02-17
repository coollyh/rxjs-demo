import { useEffect, useRef } from 'react'
import { debounce } from './lib/debounce'
import { delay } from './lib/delay'
import fromEvent from './lib/fromEvent'

function App() {
	const ref = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		fromEvent(ref.current!, 'click')
			// .pipe(delay(1000))
			.pipe(debounce(1000))
			.subscribe(e => {
				console.log('clicked!')
			})
	})
	return (
		<div className="App">
			<button ref={ref}>Click me!</button>
		</div>
	)
}

export default App
