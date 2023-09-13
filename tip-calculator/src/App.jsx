import './App.css'
import React, { useState } from 'react'
import Display from './components/Display'
import Form from './components/Form'

// style
import './index.css'


function App() {
  const [billAmount, setBillAmount] = useState(0)
   const [billError, setBillError] = useState(false)
  const [people, setPeople] = useState(0)
  const [isTipSelected, setIsTipASelected] = useState(false)
  const [selectedTip, setSelectedTip] = useState("")

function handleBillAmountInput(e){
  const input = e.target.value;
  const regex = /^\d+(\.\d{1,2})?$/;
  if(input.length === 0 || regex.test(input)){
    setBillAmount(input)
    setBillError(false)
  } else {
    setBillError(true)
  }
  setBillAmount(e.target.value)
}

function handleSelectedTip(e) {
setSelectedTip(prevTip => e.target.value)
console.log(selectedTip)
}

function handlePeople(e) {
    const input = e.target.value
  const regex = /^[0-9]$/
  if (regex.text(input)) {
    set
  }
  setPeople(e.target.value)
}

  return (
  <div className='app'>
    <div className='container'>
      <Form 
      billAmount={billAmount}
      handleBillAmountInput={handleBillAmountInput}
      handleSelectedTip={handleSelectedTip}
      billError={billError}
      handlePeople={handlePeople}
      people={people}
      />
      <Display />
    </div>
  </div>
  )
}

export default App
