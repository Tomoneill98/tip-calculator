import React from "react";

const tipAmount = [
5,10,15,20,25
]


function Tip({handleSelectedTip}) {
    return (
        <div className="tip-wrapper">
            {tipAmount.map((amount, index) => (
                <button className="tip-btn" key={index} type="radio" onClick={handleSelectedTip} value={amount}>{amount}%</button>
            ))}
            <input className="customtip-btn" type="number" placeholder="Custom" onInput={handleSelectedTip}/>
        </div>
    )
}

export default Tip