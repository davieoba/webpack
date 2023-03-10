import React, { useState, useEffect } from 'react'
import './index.css'

import axios from 'axios'

const useNotes = (url) => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get(url).then((response) => {
      setNotes(response.data)
    })
  }, [url])

  return notes
}

// this is not ordinary js, this is JSX and webpack can only bundle js app, so I need a loader

// I can use loaders to inform webpack of the files that needs to be processed before they are bundled

/**
 *
 * a loader consists of 3 parts
 * test : The test property specifies that the loader is for files that have names ending with .js.
 *
 * loader: The loader property specifies that the processing for those files will be done with babel-loader
 *
 * options: The options property is used for specifying parameters for the loader, which configure its functionality.
 */

const App = () => {
  const [counter, setCounter] = useState(0)
  const [values, setValues] = useState([])
  // const url = 'https://notes2023.fly.dev/api/notes'
  const notes = useNotes(BACKEND_URL)

  const handleClick = () => {
    setCounter(counter + 1)
    setValues(values.concat(counter))
  }

  return (
    <div className='container'>
      hello webpack {counter} clicks
      <button onClick={handleClick}>press</button>
      <div>
        {notes.length} notes on server {BACKEND_URL}
      </div>
    </div>
  )
}

export default App
