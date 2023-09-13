import './App.css'
import React, { useEffect, useState } from 'react'
import Display from './components/Display'
import Form from './components/Form'

// style
import './index.css'


function App() {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(0)
  const [total, setTotal] = useState(0)
  const [calculatedTip, setCalculatedTip] = useState(0)
  const [totalPerPerson, setTotalPerPerson] = useState(0)

  const [selectedTip, setSelectedTip] = useState("")
  
  const [billError, setBillError] = useState(false)
  const [peopleError, setPeopleError] = useState("")

  useEffect(() => {
    if(bill > 0 && people > 0 && tip > 0) {
      setCalculatedTip(bill * (selectedTip / 100))
      setTotal(calculatedTip + bill)
    }
  }, [bill, people, tip, calculatedTip])

  // function totalAmount() {
  //   setTotal((bill / people) + tip)
  // }

  // function tipAmount() {
  //   setTip(bill * (selectedTip / 100) / people) 
  // }

function handleBillInput(e){
  const input = e.target.value;
  const regex = /^\d+(\.\d{1,2})?$/;
  if(input.length === 0 || regex.test(input)){
    setBill(input)
    setBillError(false)
  } else {
    setBillError(true)
  }
  setBill(e.target.value)
}

function handleSelectedTip(e) {
setSelectedTip(e.target.value)
console.log(selectedTip)
}

function handlePeople(e) {
  const input = e.target.value;
  const regex = /^[0-9]+$/;
  if (input.length === 0 || regex.test(input)) {
    setPeople(input)
    setPeopleError(false)
  } else {
    setPeopleError(true)
  }
  setPeople(e.target.value)
}

  return (
  <div className='app'>
    <div className='container'>
      <Form 
      bill={bill}
      setBill={setBill}
      tip={tip}
      setTip={setTip}
      people={people}
      setPeople={setPeople}
      handleBillInput={handleBillInput}
      handleSelectedTip={handleSelectedTip}
      billError={billError}
      peopleError={peopleError}
      />
      <Display    
      calculatedTip={calculatedTip}
      total={total}/>
    </div>
  </div>
  )
}

export default App
