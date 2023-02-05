import React from 'react'

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
  return <div>hello webpack</div>
}

export default App
