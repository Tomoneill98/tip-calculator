import poundIcon from '../assets/images/icon-dollar.svg'
import person from '../assets/images/icon-person.svg'
import React from 'react'
import Tip from './Tip'

function Form () {
    return (
        <div className="form">
            <div className="label-group">
            <label className='label' htmlFor="bill">Bill</label>
            <input type="number" id="bill"/>
            <img src={poundIcon} className="icon"/>
            </div>


            <div className='tip-section'>
            <p className='label'>Select Tip %</p>
            <Tip/>
            </div>

            <div className="label-group">
            <div className='label-wrapper'>
                <label htmlFor="People">Number of People</label>
                <p>Error</p>
            </div>
            <input type="number" id="people"/>
              <img src={person} className="icon"/>
            </div>
          
        </div>

    )
}

export default Form