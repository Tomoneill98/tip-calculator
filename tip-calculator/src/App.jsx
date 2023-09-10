import './App.css'
import React from 'react'
import Display from './components/Display'
import Form from './components/Form'

// style
import './index.css'


function App() {

  return (
  <div className='app'>
    <div className='container'>
      <Form />
      <Display />
    </div>
  </div>
  )
}

export default App
