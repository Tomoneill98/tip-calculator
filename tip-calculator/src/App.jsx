import './App.css'
import './index.css'
import React, { useEffect, useState } from 'react'
import Display from './components/Display'
import Form from './components/Form'


function App() {
  const [bill, setBill] = useState("")
  const [tip, setTip] = useState("")
  const [people, setPeople] = useState("")
  const [total, setTotal] = useState(0)
  const [calculatedTip, setCalculatedTip] = useState(0)
  const [billError, setBillError] = useState(false)
  const [peopleError, setPeopleError] = useState("")

  useEffect(() => {
    console.log({bill, people, tip})
    if(bill > 0 && people > 0 && tip > 0) {
      setCalculatedTip(bill * (tip / 100) / people)
      setTotal(calculatedTip + bill / people)
    }
  }, [bill, people, tip, calculatedTip])



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

function handleResetButton(e) {
   setBill("");
    setTip("");
    setPeople("");
    setCalculatedTip(0);
    setTotal(0);
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
      handlePeople={handlePeople}
      handleBillInput={handleBillInput}
      billError={billError}
      peopleError={peopleError}
      />
      <Display    
      calculatedTip={calculatedTip}
      total={total}
      handleResetButton={handleResetButton}/>
    </div>
  </div>
  )
}

export default App
