import poundIcon from '../assets/images/icon-dollar.svg'
import person from '../assets/images/icon-person.svg'
import React from 'react'
import Tip from './Tip'

function Form () {
    return (
        <div className="form">
            <div className="label-group">
            <div className='label-wrapper'>
                <label className='label' htmlFor="bill">Bill</label>
                <p className='error'></p>
                </div>
           
            <div className='number-wrapper'>
                <input type="number" id="bill" className='number-input'/>
                <img src={poundIcon} className="icon"/>
                </div>
            </div>


            <div className='tip-section'>
            <p className='label'>Select Tip %</p>
            <Tip/>
            </div>

            <div className="label-group">
            <div className='label-wrapper'>
                <label htmlFor="People">Number of People</label>
                <p className='error'></p>
            </div>
            <div className='number-wrapper'>
                <input type="number" id="people" className='number-input'/>
                  <img src={person} className="icon"/>
            </div>
            </div>
          
        </div>

    )
}

export default Form