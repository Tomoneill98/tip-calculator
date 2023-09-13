import poundIcon from '../assets/images/pound.png'
import person from '../assets/images/icon-person.svg'
import React from 'react'
import Tip from './Tip'

function Form ({handleBillInput, bill, billError, handlePeople, people, peopleError, setTip, tip}) {

    function handleSelectedTip(e) {
    setTip(+e.target.value)
    console.log(tip)
}
    return (
        
        <div className="form">
            <div className="label-group">
            <div className='label-wrapper'>
                <label className='label' htmlFor="bill">Bill</label>
                <p className='error'>{billError ? "Only 2 decimal places allowed" : "" }</p>
                </div>
           
            <div className='number-wrapper'>
                <input type="number" id="bill" className='number-input' onInput={handleBillInput} value={bill}/>
                <img src={poundIcon} style={{width:13, height:13}} className="icon"/>
                </div>
            </div>

            <div className='tip-section'>
            <p className='label'>Select Tip %</p>
            <Tip handleSelectedTip={handleSelectedTip}/>
            </div>

            <div className="label-group">
            <div className='label-wrapper'>
                <label htmlFor="People" className='label'>Number of People</label>
                <p className='error'>{peopleError ? "Whole people only!" : ""}</p>
            </div>
            <div className='number-wrapper'>
                <input type="number" id="people" className='number-input' onInput={handlePeople} value={people}/>
                  <img src={person} className="icon"/>
            </div>
            </div>
          
        </div>

    )
}

export default Form