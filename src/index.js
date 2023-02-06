import App from './app'
import React from 'react'
import ReactDOM from 'react-dom/client'

/**
 * if our code is using async-await the code will not work / the browser will not render anything that is why I installed this packages.
 *
 * Note: babel will transiple our code to make use of es5 and async-await was not available in es5
 */
import 'core-js/stable/index.js'
import 'regenerator-runtime/runtime.js'

// const hello = (name) => {
//   console.log(`hello ${name}`)
// }

import PromisePolyfill from 'promise-polyfill'

if (!window.Promise) {
  window.Promise = PromisePolyfill
}

// App()
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
